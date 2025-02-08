import { useState } from "react";
import "./nearby.css";
import Map from "../map/map";

const attractions = [
  {
    id: 1,
    name: "Swim at Goyambokka Beach",
    description:
      "As beautiful as they are, most beaches in the Tangalle area are not fit for swimming as the waves are too strong",
    image:
      "https://www.cantravelwilltravel.com/wp-content/uploads/goyambokka-beach-tangalle-sri-lanka.jpg",
    location: "6.0158151,80.7661119",
    category: "Entertainment",
    coordinates: { lat: 40.7829, lng: -73.9654 },
  },
  {
    id: 2,
    name: "Watch Hummanaya Blowhole",
    description:
      "The Hummanaya Blowhole is the second biggest blowhole in the world and can be pretty spectacular and exciting to watch. The water can reach up to 25 m (82 ft) to 30 m (98 ft) in height and is most impressive during the monsoon season.",
    image:
      "https://www.cantravelwilltravel.com/wp-content/uploads/blow-hole-hummanaya-tangalle-sri-lanka.jpg",
    location: "40.7794,-73.9632",
    category: "Historical Sites",
    coordinates: { lat: 40.7794, lng: -73.9632 },
  },
  {
    id: 3,
    name: "Piccadilly Parlour",
    description:
      "When Piccadilly Parlour (then known as Piccadilly Cafe) opened its doors in 1949, it was the first ice cream parlour in Sri Lanka. Revived three years ago, it has quickly cemented its cult status among Ahangama locals.",
    image:
      "https://media.cntraveller.com/photos/673cc7018d56d7214ac77098/master/w_1600,c_limit/SHOPPING-GALLE-CNT-JANFEB24-Pako-OR-Pako-Studio-Global.jpg",
    location: "40.7831,-73.9712",
    category: "Shopping",
    coordinates: { lat: 40.7831, lng: -73.9712 },
  },
  {
    id: 4,
    name: "Waterfront Plaza",
    description:
      "Scenic riverside location with restaurants and entertainment venues",
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&q=80",
    location: "40.7023,-74.0161",
    category: "Food & Dining",
    coordinates: { lat: 40.7023, lng: -74.0161 },
  },
  {
    id: 5,
    name: "Ceylon Sliders",
    description:
      "A hippy multifunctional space on Ahangama beach, the breeze block-built, lightbulb-strung Ceylon Sliders comprises a surf shop, art gallery, restaurant, music venue and beach club.",
    image:
      "https://media.cntraveller.com/photos/673cc71386c483600a569acd/master/w_1600,c_limit/SHOPPING-GALLE-CNT-JANFEB24-PiccadillyParlour-Natelee-Cocks-Global.jpg",
    location: "40.7112,-74.0055",
    category: "Shopping",
    coordinates: { lat: 40.7112, lng: -74.0055 },
  },

  {
    id: 7,
    name: "Diving or Snorkelling in Tangalle Lagoon",
    description:
      "Tangalle is one of the best places for scuba diving and snorkelling in Sri Lanka. In the waters off Tangalle Bay, you can find different sea creatures such as lionfish, angel fish, octopus, scorpion fish and even lobsters.",
    image:
      "https://www.cantravelwilltravel.com/wp-content/uploads/blow-hole-hummanaya-tangalle-sri-lanka.jpg",
    location: "40.7587,-73.9787",
    category: "Entertainment",
    coordinates: { lat: 40.7587, lng: -73.9787 },
  },
  {
    id: 8,
    name: "Mulkirigala Raja Maha Vihara",
    description:
      "If you like visiting spiritual places like me, then a visit to the ancient Buddhist temple ‘Mulkirigala Raja Maha Vihara’ is a must. The temple is perched atop a 205m natural rock with seven caves in which reside the seven ‘viharas’. ",
    image:
      "https://www.cantravelwilltravel.com/wp-content/uploads/mulkirigala-moss-coveredstupa-e1551737977397.jpg",
    location: "40.7789,-73.9741",
    category: "Historical Sites",
    coordinates: { lat: 40.7789, lng: -73.9741 },
  },
];

const categories = ["All", "Shopping", "Historical Sites", "Entertainment"];

function Nearby() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigateToLocation = (location) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${location}`,
      "_blank"
    );
  };

  const filteredAttractions =
    selectedCategory === "All"
      ? attractions
      : attractions.filter(
          (attraction) => attraction.category === selectedCategory
        );

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Explore Nearby Attractions</h1>
          <h2>
            Discover the best places around Lake View Cabana and navigate with
            ease
          </h2>
        </div>
      </div>

      <div className="attractions-section">
        <div className="filter-section">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-button ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="map-section">
          <Map
            attractions={filteredAttractions}
            onNavigate={navigateToLocation}
          />
        </div>

        <div className="attractions-grid">
          {filteredAttractions.map((attraction) => (
            <div key={attraction.id} className="attraction-card">
              <div
                className="attraction-image"
                style={{ backgroundImage: `url(${attraction.image})` }}
              />
              <div className="attraction-content">
                <span className="category-tag">{attraction.category}</span>
                <h3>{attraction.name}</h3>
                <p>{attraction.description}</p>
                <button
                  onClick={() => navigateToLocation(attraction.location)}
                  className="navigate-button"
                >
                  Navigate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Nearby;
