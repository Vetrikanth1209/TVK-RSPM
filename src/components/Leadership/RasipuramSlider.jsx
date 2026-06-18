import "./RasipuramSlider.css";

import leadershipData from "./LeadershipData";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const RasipuramSlider = () => {
  return (
    <section className="rasipuram-section">

      <motion.div
        className="rasipuram-heading"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>Rasipuram Leadership</span>

        <h2>
          Local Leadership Team
        </h2>

        <p>
          Dedicated officials working towards
          citizen welfare, development and
          transparent governance.
        </p>
      </motion.div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 2,
          scale: 0.92,
          slideShadows: false
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="rasipuram-swiper"
      >
        {leadershipData.rasipuramOfficials.map(
          (official, index) => (
            <SwiperSlide key={index}>

              <motion.div
                className="official-card"
                whileHover={{
                  y: -10
                }}
              >

                <div className="official-image-wrapper">

                  <img
                    src={official.image}
                    alt={official.name}
                    className="official-image"
                  />

                  <div className="official-badge">
                    TVK
                  </div>

                </div>

                <div className="official-content">

                  <h3>
                    {official.name}
                  </h3>

                  <p>
                    {official.role}
                  </p>

                  <button>
                    View Profile
                  </button>

                </div>

              </motion.div>

            </SwiperSlide>
          )
        )}
      </Swiper>

    </section>
  );
};

export default RasipuramSlider;