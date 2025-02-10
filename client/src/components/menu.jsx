import React, { useState, useEffect } from "react";
import MenuItem from "./components/MenuItem";
import Cart from "./components/Cart";
import Modal from "./components/Model";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import CartIcon from "./components/CartIcon";

const API_URL = "/api/menu";

function App() {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);

  const mockApi = () => {
    const mockData = [
      {
        id: 1,
        name: "Pancakes",
        category: "Breakfast",
        price: 8.99,
        image:
          "https://imgs.search.brave.com/JoajYchKUNXnZaOoaTmT-L-CQr7mo-NTurS3W_wBJCs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzc1LzcxLzU0/LzM2MF9GXzI3NTcx/NTQwN192c0l0TG1x/NkR0Q2V5RUtBdFA2/MmdEM0lpMWVMaVdv/VS5qcGc",
        description: "Fluffy pancakes with syrup",
        ingredients: ["Flour", "Eggs", "Milk"],
        available: true,
      },
      {
        id: 2,
        name: "Burger",
        category: "Lunch",
        price: 12.99,
        image:
          "https://imgs.search.brave.com/RbqUgnkCNI1pYxSpQj26tf4CpQouIUJ-8VVBnyRGk00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAx/OTYzNTg3L3Bob3Rv/L2J1cmdlci1jaGVl/c2UuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXlnTlQwd1lz/MUFILVlsbjI4aU9i/cU5ocUgyWkhwcHda/OHBsbnpjMmpXbW89",
        description: "Classic burger with fries",
        ingredients: ["Beef", "Lettuce", "Tomato"],
        available: true,
      },
      {
        id: 3,
        name: "Steak",
        category: "Dinner",
        price: 25.99,
        image:
          "https://imgs.search.brave.com/5WiF-J1DfBa9wpeKUp4xZz6YObBky5hPwzPblIAkKTY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTYx/MjA1ODQzL3Bob3Rv/L3N0ZWFrLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1ncElR/MFB4Sl9PamJqWjRB/aVZEMVZOMGhmTGxt/VFNxU0N3QkhxUEVP/cG5FPQ",
        description: "Juicy steak with mashed potatoes",
        ingredients: ["Steak", "Potatoes", "Butter"],
        available: false,
      },
      {
        id: 4,
        name: "Soda",
        category: "Drinks",
        price: 2.99,
        image:
          "https://imgs.search.brave.com/MPCzFcv-iy4uZimJkA20WQPwYzMpYW6oxYYmx-VG7RQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zb2Rh/c3RyZWFtLmNvbS9j/ZG4vc2hvcC9maWxl/cy9pbWFnZXMtYWNj/ZXNzb3JpZXNfNmNh/NWVlMjAtZjk0NS00/MzQ5LWJkNWEtMDFj/ZTMwMzk0YWU5Lmpw/Zz92PTE2NjM4NDA3/MjYmd2lkdGg9NjAw",
        description: "Refreshing soda",
        ingredients: ["Water", "Sugar", "Flavoring"],
        available: true,
      },
      {
        id: 5,
        name: "Omelette",
        category: "Breakfast",
        price: 9.99,
        image:
          "https://imgs.search.brave.com/HqWQp0PsQVnEOuAq9nDl3Fzwip9lPnTUHglSH1NXs-Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzE1Lzg2LzIy/LzM2MF9GXzcxNTg2/MjIzNl9WSEpQZjBF/UXNYcHhTYW9NSktP/bGtxZkRTV2xrTVRa/Vy5qcGc",
        description: "Delicious omelette with cheese and vegetables",
        ingredients: ["Eggs", "Cheese", "Vegetables"],
        available: true,
      },
      {
        id: 6,
        name: "Chicken Sandwich",
        category: "Lunch",
        price: 11.99,
        image:
          "https://imgs.search.brave.com/KbFBf1eTYh3j2NT9tq9AMFxJhjisO3M4_uC6rjrm1kw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jcmlzcHktY2hp/Y2tlbi1zYW5kd2lj/aF8xMjc5NTc4LTI0/NTc3LmpwZz9zZW10/PWFpc19oeWJyaWQ",
        description: "Grilled chicken sandwich with lettuce and tomato",
        ingredients: ["Chicken", "Lettuce", "Tomato", "Bread"],
        available: true,
      },
      {
        id: 7,
        name: "Pasta",
        category: "Dinner",
        price: 18.99,
        image:
          "https://imgs.search.brave.com/QiLmGbm3bkJILqmiI6Z5DoEOLg0TSE3pxh-l2eU49vw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTEz/Njc2MzAyL3Bob3Rv/L3NwYWdoZXR0aS13/aXRoLXBlc3RvLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz15/Q1Ftdnd2RnF2Q2pr/MnZUcVNiYy1uNVI2/a3ZkX0xwMUEwcmNy/UjUyZjJjPQ",
        description: "Creamy pasta with mushrooms and parmesan",
        ingredients: ["Pasta", "Mushrooms", "Parmesan", "Cream"],
        available: true,
      },
      {
        id: 8,
        name: "Coffee",
        category: "Drinks",
        price: 3.99,
        image:
          "https://imgs.search.brave.com/ZhS7FT5jYREkkuBr8vdAgn3RYFjpb-2DVa3wWogSaJA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc3/NTM1NTk5L3Bob3Rv/L2NvZmZlZS1jdXAt/YW5kLWJlYW5zLW9u/LWEtd2hpdGUtYmFj/a2dyb3VuZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZG1U/SDlWSGhIZWdFMi1u/VW1BTmJYcmdiZHNw/V3B4VEtNQ0RMQTFY/ZU82dz0",
        description: "Hot and fresh coffee",
        ingredients: ["Coffee Beans", "Water"],
        available: true,
      },
    ];

    window.fetch = async (url) => {
      if (url === API_URL) {
        return {
          ok: true,
          json: async () => mockData,
        };
      }
      throw new Error(`Unhandled request: ${url}`);
    };
  };

  useEffect(() => {
    mockApi();
    const fetchMenu = async () => {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setMenu(data);
        setFilteredMenu(data);
      } else {
        console.error("Failed to fetch menu");
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    let result = menu;
    if (searchTerm) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== "All") {
      result = result.filter((item) => item.category === selectedCategory);
    }
    setFilteredMenu(result);
  }, [searchTerm, selectedCategory, menu]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCart);
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const categories = ["All", ...new Set(menu.map((item) => item.category))];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">Restaurant Menu</h1>
        <CartIcon onClick={toggleCart} itemCount={cart.length} />
      </div>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMenu.map((item) => (
          <MenuItem key={item.id} item={item} onOpenModal={openModal} />
        ))}
      </div>
      {showCart && <Cart cart={cart} onRemoveFromCart={removeFromCart} />}
      {selectedItem && (
        <Modal
          item={selectedItem}
          onClose={closeModal}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;