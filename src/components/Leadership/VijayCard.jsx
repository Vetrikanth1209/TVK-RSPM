import "./VijayCard.css";
import { motion } from "framer-motion";
import leadershipData from "./LeadershipData";

const VijayCard = () => {
  return (
    <section className="vijay-section">

      <motion.div
        className="vijay-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        {/* LEFT SIDE */}

        <motion.div
          className="vijay-image-wrapper"
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 4
          }}
        >
          <img
            src={leadershipData.topLeader.image}
            alt="Vijay"
            className="vijay-image"
          />
        </motion.div>

        {/* RIGHT SIDE */}

        <div className="vijay-content">

          <span className="role-badge">
            Founder & President
          </span>

          <h1>
            VIJAY
          </h1>

          <p className="vijay-quote">
            Leadership that listens.
            Leadership that delivers.
            Leadership that transforms.
          </p>

          <div className="principles-grid">

            <motion.div
              className="principle-card"
              whileHover={{
                y: -8
              }}
            >
              <span>Ideology</span>

              <h4>கொள்கை</h4>

              <p>
                சமூக நீதி, சமத்துவம் மற்றும்
                சகோதரத்துவத்துடன் கூடிய
                கொள்கை வழி அரசியல் தனித்துவம்
              </p>
            </motion.div>

            <motion.div
              className="principle-card"
              whileHover={{
                y: -8
              }}
            >
              <span>Action Plan</span>

              <h4>செயல்திட்டம்</h4>

              <p>
                சமரசமற்ற, மக்கள் மற்றும்
                மாநில நலன்களை அடிப்படையாக
                கொண்ட நிலைத்தன்மை கொண்ட கொள்கைகள்
              </p>
            </motion.div>

            <motion.div
              className="principle-card"
              whileHover={{
                y: -8
              }}
            >
              <span>Resolutions</span>

              <h4>தீர்மானங்கள்</h4>

              <p>
                அனைத்து தரப்பு மக்கள் மற்றும்
                மாநில வளர்ச்சித் திட்டங்கள்
                சார்ந்த செயல்பாடுகள்
              </p>
            </motion.div>

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default VijayCard;