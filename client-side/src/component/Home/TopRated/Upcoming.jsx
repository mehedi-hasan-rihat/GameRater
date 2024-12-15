import React from "react";

const UpcomingGamePreviews = () => {
  return (
    <section className="dark:from-gray-800 dark:to-gray-800 bg-gradient-to-r from-white via-gray-100 to-white text-gray-800 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-md sm:text-2xl md:text-3xl lg:text-4xl font-medium sm:font-semibold mb-8 text-gray-800 titleForSection dark:text-white">
          Upcoming Game Updates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gridss-cols-4 gap-10 lg:gap-10 px-3">
          <div className=" rounded-md shadow-md bg-gray-50 dark:bg-gray-900  hover:shadow-lg dark:shadow-xl transform transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1595429035839-c99c298ffdde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBnYW1lfGVufDB8fDB8fHww"
              alt="Game Title 1"
              className="w-full rounded-md h-64 object-cover transform transition-all duration-300 "
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white/80">
                Joker Man
              </h3>
              <p className="font-medium text-black/70 dark:text-white/70">
                Release Date: March 15, 2028
              </p>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                A thrilling new RPG where you embark on an epic adventure to
                save the world. Explore vast lands and battle formidable foes.
              </p>
            </div>
          </div>

          <div className="rounded-md shadow-md bg-gray-50 dark:bg-gray-900  hover:shadow-lg dark:shadow-xl transform transition-all duration-300">
            <img
              src="https://play-lh.googleusercontent.com/6oapIRmqsbr-yt_tBZVvs-ollGW_kw5SpuHFOTA9gbQzZ5rteDyQX0BrK2upnmGYeBs=w416-h235-rw"
              alt="Game Title 1"
              className="w-full h-64 object-cover transform transition-all duration-300 "
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white/80">
                Road Climb
              </h3>
              <p className="font-medium text-black/70 dark:text-white/70">
                Release Date: January 15, 2025
              </p>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                A new Car CLimbing Game. Here You can enjoy a lot of things like
                hill climb, ice clime etc.
              </p>
            </div>
          </div>

          <div className="rounded-md shadow-md bg-gray-50 dark:bg-gray-900  hover:shadow-lg dark:shadow-xl transform transition-all duration-300">
            <img
              src="data:image/webp;base64,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"
              alt="Game Title 1"
              className="w-full h-64 object-cover transform transition-all duration-300 "
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white/80">
                Shadowstrike Chronicles
              </h3>
              <p className="font-medium text-black/70 dark:text-white/70">
                Release Date: January 15, 2025
              </p>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                A thrilling new RPG where you embark on an epic adventure to
                save the world. Explore vast lands and battle formidable foes.
              </p>
            </div>
          </div>

          <div className="rounded-md shadow-md bg-gray-50 dark:bg-gray-900  hover:shadow-lg dark:shadow-xl transform transition-all duration-300">
            <img
              src="https://play-lh.googleusercontent.com/1_Us8rwI8oBAlh3zbcbFULUeNuMfyp_oxQo44Yz4l0TwBjrvV0h4zXPUP6mKy402GOS-=w526-h296-rw"
              alt="Game Title 1"
              className="w-full h-64 object-cover transform transition-all duration-300 "
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white/80">
                Beat Boast
              </h3>
              <p className="font-medium text-black/70 dark:text-white/70">
                Release Date: January 25, 2024
              </p>
              <p className="mt-3 text-gray-500 dark:text-gray-400">
                ace your way through the hills and crush your enemies with
                steel. Collect loot from your fallen enemies and boost your
                vehicles with the best upgrades and special weapons you can
                find.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingGamePreviews;
