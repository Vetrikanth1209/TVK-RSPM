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
        <span>ராசிபுரம் நிர்வாகம்</span>

        <h2>
          உள்ளூர் தலைமைக் குழு
        </h2>

        <p>
          மக்களின் நலன், வளர்ச்சி மற்றும்
          வெளிப்படையான நிர்வாகத்திற்காக
          அர்ப்பணிப்புடன் செயல்படும் நிர்வாகிகள்.
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