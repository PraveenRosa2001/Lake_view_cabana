const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { Reservation } = require("./models");
const { makeReservation } = require("./webhooks/index");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
const stripe = require("stripe");

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret =
  "whsec_234db6f1bf5247050818477e5b438ed17b3aab52ca2dcba4cb92d65539dfd314";

//const endpointSecret = process.env.STRIPESECRET;

app.use(express.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/webhook", (request, response) => {
  const sig = request.headers["stripe-signature"];
  //console.log("sig");
  //console.log(sig);

  let event;

  console.log("req body");
  console.log(request.body);
  if (request.body.type == "payment_intent.succeeded") {
    console.log(request.body.data.object.metadata);
    console.log("payment success");
    makeReservation(request.body.data.object.metadata);
    // const reservationObj = {
    //    "roomNumbers": [roomNumber],
    //    "startDate": startDate,
    //    "endDate": endDate,
    //    "cost": cost,
    //    "email": context.user.email,
    //    "prodId": paymentId,
    //    "payment": "pending",
    // }
    // const { _id } = await Reservation.create({ ...reservationObj });
    // const room = await Room.findOneAndUpdate(
    //    { roomNumber: roomNumber },
    //    {
    //        $addToSet: {
    //            reservations: _id,
    //        },
    //    },
    // );
  } else if (
    request.body.type == "payment_intent.canceled" ||
    "payment_intent.canceled"
  ) {
    console.log("not successful");
  }

  //return response.status(200);
  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  //console.log("event");
  //console.log(event);

  // Handle the event

  //switch (event.type) {
  //    case 'payment_intent.succeeded':
  //        const paymentIntent = event.data.object;
  //        console.log("paymentIntent");
  //        console.log(paymentIntent);

  //        // Then define and call a function to handle the event payment_intent.succeeded
  //        break;
  // ... handle other event types
  //    default:
  //        console.log(`Unhandled event type ${event.type}`);
  //}

  // Return a 200 response to acknowledge receipt of the event
  return response.status(200);
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

// webhook_app.listen(4242, () => console.log('Running on port 4242'));
