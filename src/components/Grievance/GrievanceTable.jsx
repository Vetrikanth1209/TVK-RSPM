import "./GrievanceTable.css";

import { useEffect, useState } from "react";

import { getAllGrievances } from "./indexedDB";

import { motion } from "framer-motion";

const GrievanceTable = () => {

  const [grievances, setGrievances] = useState([]);

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    const data = await getAllGrievances();

    setGrievances(data);

  };

  return (

    <section className="grievance-table-section">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >

        <span className="table-tag">
          மக்கள் பதிவுகள்
        </span>

        <h2>
          பதிவு செய்யப்பட்ட குறைகள்
        </h2>

      </motion.div>

      <div className="table-wrapper">

        <table className="grievance-table">

          <thead>

            <tr>

              <th>எண்</th>

              <th>பெயர்</th>

              <th>கைபேசி</th>

              <th>வார்டு</th>

              <th>பிரிவு</th>

              <th>குறை</th>

              <th>தேதி</th>

            </tr>

          </thead>

          <tbody>

            {grievances.length > 0 ? (

              grievances.map((item) => (

                <tr key={item.id}>

                  <td>#{item.id}</td>

                  <td>{item.name}</td>

                  <td>{item.phone}</td>

                  <td>{item.ward}</td>

                  <td>{item.category}</td>

                  <td>{item.issue}</td>

                  <td>
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString("ta-IN")}
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="7"
                  className="no-data"
                >
                  இதுவரை எந்த குறையும் பதிவு செய்யப்படவில்லை
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </section>

  );

};

export default GrievanceTable;