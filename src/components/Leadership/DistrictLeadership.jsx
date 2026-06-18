import "./DistrictLeadership.css";
import { motion } from "framer-motion";
import leadershipData from "./LeadershipData";

const DistrictLeadership = () => {
  return (
    <section className="senior-leadership-section">

      <div className="senior-heading">

        <span>District Leadership</span>

        <h2>
          Namakkal District Team
        </h2>

      </div>

      <div className="executive-grid">

        {leadershipData.districtLeaders.map(
          (leader, index) => (
            <motion.div
              key={index}
              className="executive-card"
              initial={{
                opacity: 0,
                y: 80
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
            >

              <img
                src={leader.image}
                alt={leader.name}
                className="executive-image"
              />

              <div className="executive-content">

                <span className="executive-role">
                  {leader.district}
                </span>

                <h3>
                  {leader.name}
                </h3>

                <p>
                  {leader.role}
                </p>

              </div>

            </motion.div>
          )
        )}

      </div>

    </section>
  );
};

export default DistrictLeadership;