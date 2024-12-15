import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Img1 from "../../../assets/banner/img1.jpg";
import Img2 from "../../../assets/banner/img2.jpg";
import Img3 from "../../../assets/banner/img3.jpg";
import Img4 from "../../../assets/banner/img4.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  return (
    <div className="z-10">
      {" "}
      <Slide>
        <div className="each-slide-effect mt-1">
          <div
            className="flex items-center justify-center bg-cover  h-[300px] md:h-[400px] lg:h-[650px]"
            style={{
              backgroundImage: `url("https://cdn.pixabay.com/photo/2022/12/02/21/22/warrior-7631678_1280.jpg")`,
            }}
          >
            <span className="text-xl sm:2xl md:text-4xl font-bold text-white absolute bottom-3">
              <Typewriter
                words={[
                  "Welcome to Gamesphere",
                  "Tom Clancy",
                  "The Division Review",
                  "Explore, Review, Play!",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="flex items-center justify-center bg-cover  h-[300px] md:h-[400px] lg:h-[650px]"
            style={{
              backgroundImage: `url("https://media.istockphoto.com/id/177015825/vector/armored-dragon.jpg?s=612x612&w=0&k=20&c=NsoQghP7rAaJdm21_LubRWmwvTGHVIbKUuE7z4Y3X90=")`,
            }}
          >
            <span className="text-xl sm:2xl md:text-4xl font-bold text-white absolute bottom-3">
              <Typewriter
                words={[
                  "Welcome to Game-sp-here",
                  "Tom Clancy",
                  "The Division Review",
                  "Explore, Review, Play!",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="flex items-center justify-center bg-cover  h-[300px] md:h-[400px] lg:h-[650px]"
            style={{
              backgroundImage: `url("https://cdn.pixabay.com/photo/2022/12/02/21/22/warrior-7631680_1280.jpg")`,
            }}
          >
            <span className="text-xl sm:2xl md:text-4xl font-bold text-white absolute bottom-3">
              <Typewriter
                words={[
                  "Welcome to Game-sp-here",
                  "Tom Clancy",
                  "The Division Review",
                  "Explore, Review, Play!",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="flex items-center justify-center bg-cover h-[300px] md:h-[400px] lg:h-[650px]"
            style={{
              backgroundImage: `url("https://cdn.pixabay.com/photo/2023/03/12/10/03/ai-generated-7846319_960_720.jpg")`,
            }}
          >
            <span className="text-xl sm:2xl md:text-4xl font-bold text-white absolute bottom-3">
              <Typewriter
                words={[
                  "Welcome to Game-sp-here",
                  "Tom Clancy",
                  "The Division Review",
                  "Explore, Review, Play!",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </div>
      </Slide>
    </div>
  );
}
