import "./SeniorLeadership.css";
import { motion } from "framer-motion";
import leadershipData from "./LeadershipData";

const SeniorLeadership = () => {
  return (
    <section className="district-section">

      <div className="district-heading">

        <span>
          தலைமை நிர்வாகம்
        </span>

        <h2>
          மூத்த தலைமைக் குழு
        </h2>

      </div>

      <div className="district-grid">

        {leadershipData.seniorLeaders.map(
          (leader, index) => (
            <motion.div
              key={index}
              className="district-card"
              initial={{
                opacity: 0,
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2
              }}
              whileHover={{
                y: -8
              }}
            >

              <div className="district-image-side">

                <img
                  src={leader.image}
                  alt={leader.name}
                  className="district-image"
                />

              </div>

              <div className="district-content">

                <span className="district-badge">
                  மாநில தலைமைக் குழு
                </span>

                <h3>
                  {leader.name}
                </h3>

                <p>
                  {leader.role}
                </p>

                <div className="district-line"></div>

                

              </div>

            </motion.div>
          )
        )}

      </div>

    </section>
  );
};

export default SeniorLeadership;