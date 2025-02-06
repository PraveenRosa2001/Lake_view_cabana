import React from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // For Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For Bootstrap JS (necessary for the carousel functionality)

const Food = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      {/* intro photo */}
      <section>
  <img
    src={require("../assets/foodCollage.jpeg")}
    className="w-full h-[100vh] object-cover"
    alt="Lake View"
  />
</section>



      {/* about section */}
      <section className="p-4 bg-[rgba(207,181,59)]">
        <h1 className="text-[48px] font-economica font-bold pl-10 pt-4 drop-shadow-[2px_2px_.5px_white]">
          Culinary Craftsmanship
        </h1>
        <div className="flex flex-wrap justify-around mt-6 mb-6">
          <p className="max-w-[800px] text-[25px] mt-[100px] italic font-serif">
            Culinary Craftsmanship At Malie, we believe food is a celebration of
            place, passion, and craftsmanship. Our expert culinary team combines
            locally sourced ingredients—including organic produce grown on our
            own grounds—with inventive takes on the traditional flavors of
            Malieian cuisine to create unforgettable dining experiences rooted
            in the very essence of the Malieian land we call home.
          </p>
          <img
            src={require("../assets/client.jpg")}
            alt="Pink Socks"
            className="border-solid border-black border-4 rounded max-w-[700px] max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none shadow-black shadow-2xl"
          />
        </div>
      </section>

      {/* photo gallery */}
      <section class="bg-black overflow-hidden text-gray-700 ">
        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 mb-10 mt-10">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                {" "}
                <div class="relative overflow-hidden">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={require("../assets/pic2.jpeg")}
                  ></img>
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                {" "}
                <div class="relative overflow-hidden">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={require("../assets/pic3.jpeg")}
                  ></img>
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                {" "}
                <div class="relative overflow-hidden">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={require("../assets/pic4.jpeg")}
                  ></img>
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                {" "}
                <div class="relative overflow-hidden">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={require("../assets/pic5.jpeg")}
                  ></img>
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                {" "}
                <div class="relative overflow-hidden">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={require("../assets/pic6.jpeg")}
                  ></img>
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                {" "}
                <div class="relative overflow-hidden">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src={require("../assets/pic7.jpeg")}
                  ></img>
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* carousel */}
      <section>
        <div
          id="carouselDarkVariant"
          class="carousel slide carousel-fade carousel-dark relative"
          data-bs-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="1"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="2"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="3"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="4"
              aria-label="Slide 1"
            ></button>
          </div>
          {/* <!-- Inner --> */}
          <div class="carousel-inner relative w-full overflow-hidden">
            {/* <!-- Single item --> */}
            <div class="carousel-item active relative float-left w-full">
              <img
                src={require("../assets/food1.jpeg")}
                class="block w-full"
                alt="Motorbike Smoke"
              />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="font-serif text-[48px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  -Mark Twain
                </h5>
                <p class="text-[38px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  “The only way to keep your health is to eat what you don’t
                  want, drink what you don’t like, and do what you’d rather
                  not.”
                </p>
              </div>
            </div>
            {/* <!-- Single item --> */}
            <div class="carousel-item relative float-left w-full">
              <img
                src={require("../assets/food2.jpeg")}
                class="block w-full"
                alt="Mountaintop"
              />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="font-serif text-[48px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  - Homer Simpson
                </h5>
                <p class="text-[38px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  “I am going on a diet. From this day forward, I pledge there
                  will be no pork chop too succulent! No donut too tasty!"
                </p>
              </div>
            </div>
            {/* <!-- Single item --> */}
            <div class="carousel-item relative float-left w-full">
              <img
                src={require("../assets/food3.jpeg")}
                class="block w-full"
                alt="Woman Reading a Book"
              />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="font-serif text-[48px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  - Peter Griffin
                </h5>
                <p class="text-[38px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  "Well last night me and Brian got drunk and ate the turkey,
                  but before you get mad we also ate the salad."
                </p>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src={require("../assets/food4.jpeg")}
                class="block w-full"
                alt="Woman Reading a Book"
              />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="font-serif text-[48px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  - Jimmy Fallon
                </h5>
                <p class="text-[38px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  "Thank you, horseradish, for being neither a radish nor a
                  horse. What you are is a liar food."
                </p>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src={require("../assets/food5.jpeg")}
                class="block w-full"
                alt="Woman Reading a Book"
              />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="font-serif text-[48px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  - Julia Childs
                </h5>
                <p class="text-[38px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  “A party without cake is just a meeting.”
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Inner --> */}
          {/* <!-- Controls --> */}
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* select dining options */}
      <section className="bg-black">
        <div className="mb-2 flex p-1 justify-around items-center flex-wrap">
          {/* card 1 */}
          <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-[rgba(207,181,59)] max-w-sm border-4 border-white mb-6">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg"
                  src={require("../assets/smallFood1.jpg")}
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                Breakfast
                </h5>
                <p class="text-gray-700 text-base mb-4 font-serif	">
                Start your day with a wholesome Sri Lankan breakfast featuring classics like freshly steamed string hoppers, creamy coconut sambol, and aromatic lentil curry. Crafted with locally sourced, fresh ingredients, our breakfast ensures an energizing and delightful start to your day</p>
                <p>Note: Please place your order at least 4 hours before the desired serving time.</p>

                

                <a href="#footer-section">
                  {" "}
                  Contact Us for More Details
                </a>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-[rgba(207,181,59)] max-w-sm border-4 border-white mb-6">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg"
                  src={require("../assets/smallFood2.jpg")}
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                Lunch
                </h5>
                <p class="text-gray-700 text-base mb-4 font-serif	">
                Savor the vibrant flavors of a traditional Sri Lankan lunch, crafted with a blend of spices and love. From creamy jackfruit curry to crispy pappadam, each dish showcases the richness of our culinary heritage. Pair it with fragrant rice and enjoy a truly refreshing dining experience.
                </p>
                <p>Note: Please place your order at least 4 hours before the desired serving time.</p>


                <a href="#footer-section">
                  {" "}
                  Contact Us for More Details
                </a>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div class="flex justify-center ">
            <div class="rounded-lg shadow-lg bg-[rgba(207,181,59)] max-w-sm border-4 border-white mb-6">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg"
                  src={require("../assets/smallFood3.jpg")}
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                Dinner
                </h5>
                <p class="text-gray-700 text-base mb-4">
                End your day with a sumptuous Sri Lankan dinner under the tranquil evening sky. Indulge in aromatic rice and curry dishes, crispy hoppers, and a variety of sambols that highlight the best of our island cuisine. Let the soothing ambiance and delightful flavors create a memorable experience.
                </p>
                <p>Note: Please place your order at least 4 hours before the desired serving time.</p>

                <a href="#footer-section">
                  {" "}
                  Contact Us for More Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Food;