import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer/footer";
import { cubeImg, cubeTextImg, verticalImg } from "./data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/mousewheel";
import "swiper/css/effect-fade";

import "./App.css";

// import required modules
import {
  Autoplay,
  EffectCube,
  Mousewheel,
  Controller,
  EffectFade,
} from "swiper/modules";

export default function App() {
  const cubeSwiperRef = useRef(null);
  const cubeSwiperTextRef = useRef(null);
  const horizontalSwiperRef = useRef(null);
  const verticalSwiperRef = useRef(null);

  // 큐브 스와이퍼와 큐브 스와이퍼 밑에 텍스트를 서로 연결
  useEffect(() => {
    const cubeSwiper = cubeSwiperRef.current.swiper;
    const cubeSwiperText = cubeSwiperTextRef.current.swiper;

    if (cubeSwiper.controller && cubeSwiperText.controller) {
      cubeSwiper.controller.control = cubeSwiperText;
      cubeSwiperText.controller.control = cubeSwiper;
    }
  }, []);

  // 마우스휠 이벤트 관련
  useEffect(() => {
    const cubeSwiper = cubeSwiperRef.current.swiper;
    const horizontalSwiper = horizontalSwiperRef.current.swiper;
    const verticalSwiper = verticalSwiperRef.current.swiper;

    const handleCubeSlideTransitionStart = () => {
      horizontalSwiper.mousewheel.disable();
    };

    const handleCubeSlideTransitionEnd = () => {
      horizontalSwiper.mousewheel.enable();
    };

    cubeSwiper.on("slideChangeTransitionStart", handleCubeSlideTransitionStart);
    cubeSwiper.on("slideChangeTransitionEnd", handleCubeSlideTransitionEnd);
    verticalSwiper.on(
      "slideChangeTransitionStart",
      handleCubeSlideTransitionStart
    );
    verticalSwiper.on("slideChangeTransitionEnd", handleCubeSlideTransitionEnd);

    return () => {
      cubeSwiper.off(
        "slideChangeTransitionStart",
        handleCubeSlideTransitionStart
      );
      cubeSwiper.off("slideChangeTransitionEnd", handleCubeSlideTransitionEnd);
      verticalSwiper.off(
        "slideChangeTransitionStart",
        handleCubeSlideTransitionStart
      );
      verticalSwiper.off(
        "slideChangeTransitionEnd",
        handleCubeSlideTransitionEnd
      );
    };
  }, [cubeSwiperRef, horizontalSwiperRef, verticalSwiperRef]);

  const goToFirstPage = () => {
    const horizontalSwiper = horizontalSwiperRef.current.swiper;
    const verticalSwiper = verticalSwiperRef.current.swiper;
    horizontalSwiper.slideTo(-1, 1000, false);
    verticalSwiper.slideTo(-1, 1000, false);
  };

  return (
    <>
      {/* <p className="title">I CULTURE</p> */}
      <a className="title" onClick={goToFirstPage}>
        <img src="./assets/title.png" alt="" />
      </a>
      <Swiper
        className="horizontalSwiper"
        mousewheel={true}
        modules={[Mousewheel]}
        ref={horizontalSwiperRef}
      >
        <SwiperSlide>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
              // shadowOffset: 30,
              // shadowScale: 1.10,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            mousewheel={true}
            modules={[EffectCube, Mousewheel, Controller, Autoplay]}
            ref={cubeSwiperRef}
            className="cubeSwiper"
          >
            {cubeImg.map((cubeImg) => {
              return (
                <SwiperSlide key={cubeImg.id}>
                  <img src={cubeImg.src} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Swiper
            effect={"cube"}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
              // shadowOffset: 30,
              // shadowScale: 1.10,
            }}
            loop={true}
            mousewheel={true}
            modules={[EffectCube, Mousewheel, Controller]}
            ref={cubeSwiperTextRef}
            className="cubeSwiperText"
          >
            {cubeTextImg.map((cubeTextImg) => {
              return (
                <SwiperSlide key={cubeTextImg.id}>
                  <img src={cubeTextImg.src} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="itsYourTurnText"
            src="./assets/itsYourTurnText.png"
            alt=""
          />
          <img src="./assets/itsYourTurn.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <p className="iCulture">I Culture</p>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="verticalSwiper"
            effect={"fade"}
            speed={150}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            mousewheel={true}
            direction="vertical"
            modules={[Mousewheel, EffectFade, Autoplay]}
            ref={verticalSwiperRef}
          >
            {" "}
            {verticalImg.map((verticalImg) => {
              return (
                <SwiperSlide key={verticalImg.id}>
                  <img src={verticalImg.src} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
      <p className="copyright">ⓒ IC Corp. All rights reserved.</p>
    </>
  );
}
