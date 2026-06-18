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
          Citizen Records
        </span>

        <h2>
          Submitted Grievances
        </h2>

      </motion.div>

      <div className="table-wrapper">

        <table className="grievance-table">

          <thead>

            <tr>

              <th>ID</th>

              <th>Name</th>

              <th>Phone</th>

              <th>Ward</th>

              <th>Category</th>

              <th>Issue</th>

              <th>Date</th>

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
                    ).toLocaleDateString()}
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="7"
                  className="no-data"
                >
                  No Grievances Submitted Yet
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