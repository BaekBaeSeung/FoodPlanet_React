import React, { useEffect } from "react";
import "./offers.css";
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
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
            특별 혜택!!
          </h2>
          <p data-aos="fade-up" data-aos-duration="2000">
            역사적인 도시부터 자연의 경이로움까지, 세계의 최고를 만나러 오세요!
          </p>
        </div>

        <div className="mainContent grid">
          {Offers.map((Offers) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
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
                      <MdKingBed className="icon" />
                      <small>2 Beds</small>
                    </div>

                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small>1 Bath</small>
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
