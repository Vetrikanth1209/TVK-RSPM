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

        {/* IMAGE */}

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
            alt="விஜய்"
            className="vijay-image"
          />
        </motion.div>

        {/* CONTENT */}

        <div className="vijay-content">

          <span className="role-badge">
            தலைவர் & நிறுவனர்
          </span>

          <h1>
            விஜய்
          </h1>

          <p className="vijay-quote">
            மக்கள் குரலைக் கேட்கும் தலைமை.
            மக்களுக்காக செயல்படும் தலைமை.
            மாற்றத்தை உருவாக்கும் தலைமை.
          </p>

          <div className="principles-grid">

            <motion.div
              className="principle-card"
              whileHover={{ y: -8 }}
            >
              <span>கொள்கை</span>

              <h4>
                சமூக நீதி
              </h4>

              <p>
                சமூக நீதி, சமத்துவம் மற்றும்
                சகோதரத்துவத்துடன் கூடிய
                கொள்கை வழி அரசியல் தனித்துவம்.
              </p>
            </motion.div>

            <motion.div
              className="principle-card"
              whileHover={{ y: -8 }}
            >
              <span>செயல்திட்டம்</span>

              <h4>
                மக்கள் நலன்
              </h4>

              <p>
                சமரசமற்ற, மக்கள் மற்றும்
                மாநில நலன்களை அடிப்படையாக
                கொண்ட நிலைத்தன்மை வாய்ந்த
                செயல்திட்டங்கள்.
              </p>
            </motion.div>

            <motion.div
              className="principle-card"
              whileHover={{ y: -8 }}
            >
              <span>தீர்மானங்கள்</span>

              <h4>
                வளர்ச்சி நோக்கம்
              </h4>

              <p>
                அனைத்து தரப்பு மக்களின்
                முன்னேற்றத்தையும் மாநில
                வளர்ச்சியையும் நோக்கமாகக்
                கொண்ட செயல்பாடுகள்.
              </p>
            </motion.div>

          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default VijayCard;