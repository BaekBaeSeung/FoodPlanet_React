import React, { useEffect } from "react";
import "./offers.css";
import { FaCarSide } from "react-icons/fa";
import { FaChildReaching } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

// import images ==========================>
import img from "../../Assets/Dining/pexels-pixabay-260922.jpg";
import img2 from "../../Assets/Dining/pexels-bemistermister-3434523.jpg";
import img3 from "../../Assets/Dining/pexels-ben-maxwell-479813-1194234.jpg";
import img4 from "../../Assets/Dining/pexels-chanwalrus-941861.jpg";
import img5 from "../../Assets/Dining/pexels-cottonbro-3171201.jpg";
import img6 from "../../Assets/Dining/pexels-igor-starkov-233202-1055054.jpg";
import img7 from "../../Assets/Dining/pexels-lina-1813504.jpg";

// import images ==========================>

import Aos from "aos";
import "aos/dist/aos.css";

// 할인정보 MAP
const Offers = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "촛불1978",
    location: "서울 중구 소파로 95 촛불 레스토랑",
    price: "312,000",
  },
  {
    id: 2,
    imgSrc: img3,
    destTitle: "촛불1978",
    location: "서울 중구 소파로 95 촛불 레스토랑",
    price: "453,000",
  },
  {
    id: 3,
    imgSrc: img4,
    destTitle: "촛불1978",
    location: "서울 중구 소파로 95 촛불 레스토랑",
    price: "321,000",
  },
  {
    id: 4,
    imgSrc: img5,
    destTitle: "촛불1978",
    location: "서울 중구 소파로 95 촛불 레스토랑",
    price: "512,000",
  },
  {
    id: 5,
    imgSrc: img6,
    destTitle: "촛불1978",
    location: "서울 중구 소파로 95 촛불 레스토랑",
    price: "512,000",
  },
  {
    id: 6,
    imgSrc: img7,
    destTitle: "촛불1978",
    location: "서울 중구 소파로 95 촛불 레스토랑",
    price: "512,000",
  },
];

const Offer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="offer container section">
      <div className="secContainer">
        {/* secIntro는 App.css 에서 스타일링 함... */}
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            현재 세일중인 Planets
          </h2>
          <p data-aos="fade-up" data-aos-duration="2000">
            세일 정보를 확인해보세요!
          </p>
        </div>

        <div className="mainContent grid">
          {Offers.map((Offers) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="singleOffer"
              >
                <div className="destImage">
                  <img src={Offers.imgSrc} alt="Image Name" />

                  <span className="discount">30% Off</span>
                </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>{Offers.price} ￦</h4>
                    <span className="status">For Rent</span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <FaCarSide className="icon" />
                      <small>Parking available</small>
                    </div>

                    <div className="singleAmenity flex">
                      <FaChildReaching className="icon" />
                      <small>Children's facilities</small>
                    </div>

                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>Wi-Fi</small>
                    </div>

                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>

                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>{Offers.location}.</small>
                  </div>
                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offer;
