import {
  Navbar,
  Home,
  Footer,
  GolfCourse,
  Rooms,
  Payment,
  Food,
  Admin,
} from "./components";
import Nearby from "./components/nearby/nearby";
import Menu from "./components/menu";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginProvider } from "./utils/LoginContext";
import { DateProvider } from "./utils/DateContext";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { useState } from "react";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotClick = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <ApolloProvider client={client}>
      <div className="bg-primary w-full overflow-hidden">
        <LoginProvider>
          <DateProvider>
            <Router>
              <div>
                {/* Global chatbot button */}
                <button
                  onClick={handleChatbotClick}
                  style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 1000,
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {showChatbot ? "Close Chatbot" : "Open Chatbot"}
                </button>

                {/* Embed chatbot in an iframe */}
                {showChatbot && (
                  <iframe
                    src="http://localhost:3000/" // Replace with your chatbot URL
                    width="400"
                    height="500"
                    style={{
                      position: "fixed",
                      bottom: "80px",
                      right: "20px",
                      border: "none",
                      zIndex: 1000,
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    }}
                    title="Chatbot"
                  />
                )}
                <Navbar />

                <Routes>
                  <Route exact path="/" element={<Home />} />

                  <Route exact path="/rooms" element={<Rooms />} />
                  <Route exact path="/payment" element={<Payment />} />
                  <Route exact path="/food" element={<Menu />} />
                  <Route exact path="/admin" element={<Admin />} />
                  <Route exact path="/nearby" element={<Nearby />} />
                </Routes>

                <Footer />
              </div>
            </Router>
          </DateProvider>
        </LoginProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
