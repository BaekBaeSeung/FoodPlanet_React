import React, { useEffect } from "react";
import "./popular.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

// Import the images=========================>
import img from "../../Assets/pexels-leticia-alvares-1805702-14082105.jpg";
import img2 from "../../Assets/촛불1978_03.png";
import img3 from "../../Assets/촛불1978_04.png";
import img4 from "../../Assets/촛불1978_05.png";
import img5 from "../../Assets/촛불1978_06.png";
import img6 from "../../Assets/pexels-meum-mare-204165854-17498733.jpg";
// Import the images=========================>

import Aos from "aos";
import "aos/dist/aos.css";

//  이제 고차 배열 메소드를 사용하여 Map을 이용해
//  모든 목적지를 표시할 것입니다. 이를 위해
//   'Data'라는 배열에 모든 목적지를 나열해야 하며,
//  나중에는 각 목적지를 인덱스 또는 ID로 호출할 것입니다.

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "촛불1978",
    location: "서울 중구 소파로 95 촛불 레스토랑",
    grade:
      "촛불1978은 46년의 역사를 가진 남산의 레스토랑으로" +
      "100만 쌍 이상이 프로포즈한 추억과 사랑의 공간입니다.",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "촛불1978",
    location: "서울 중구 소파로 95 촛불 레스토랑",
    grade:
      "촛불1978은 46년의 역사를 가진 남산의 레스토랑으로" +
      "100만 쌍 이상이 프로포즈한 추억과 사랑의 공간입니다.",
  },
  {
    id: 3,
    imgSrc: img4,
    destTitle: "촛불1978",
    location: "서울 중구 소파로 95 촛불 레스토랑",
    grade:
      "촛불1978은 46년의 역사를 가진 남산의 레스토랑으로" +
      "100만 쌍 이상이 프로포즈한 추억과 사랑의 공간입니다.",
  },
  {
    id: 4,
    imgSrc: img5,
    destTitle: "촛불1978",
    location: "서울 중구 소파로 95 촛불 레스토랑",
    grade:
      "촛불1978은 46년의 역사를 가진 남산의 레스토랑으로" +
      "100만 쌍 이상이 프로포즈한 추억과 사랑의 공간입니다.",
  },
  // {
  //   id: 5,
  //   imgSrc: img6,
  //   destTitle: "토론토",
  //   location: "캐나다",
  //   grade: "도시 문화",
  // },
];

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div
            data-aos="fade-right"
            data-aos-duration="2500"
            className="textDiv"
          >
            <h2 className="sectitle">Popular DesTination</h2>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2500"
            className="iconsDiv flex"
          >
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map((Data) => {
            return (
              <div data-aos="fade-up" className="singleDestination">
                <div className="destImage">
                  <img src={Data.imgSrc} alt="dining pic" />

                  <div className="overlayInfo">
                    <h3>{Data.destTitle}</h3>
                    <p>{Data.grade}</p>

                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{Data.id}</div>

                  <div className="destText flex">
                    <h6>{Data.location}</h6>

                    <span className="flex">
                      <sapn className="dot">
                        <BsDot className="icon" />
                      </sapn>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
