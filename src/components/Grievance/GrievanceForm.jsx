import "./GrievanceForm.css";
import { useState } from "react";
import { saveGrievance } from "./indexedDB";
import { motion } from "framer-motion";

const GrievanceForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    ward: "",
    category: "",
    issue: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await saveGrievance(formData);

    alert("Grievance Submitted Successfully!");

    setFormData({
      name: "",
      phone: "",
      ward: "",
      category: "",
      issue: ""
    });

  };

  return (

    <section className="grievance-section">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
      >

        <span className="grievance-tag">
          Citizen Support
        </span>

        <h2>
          Report Your Grievance
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grievance-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="ward"
            value={formData.ward}
            onChange={handleChange}
            required
          >

            <option value="">
              Select Ward
            </option>

            {[...Array(27)].map((_, i) => (
              <option key={i}>
                Ward {i + 1}
              </option>
            ))}

          </select>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >

            <option value="">
              Select Category
            </option>

            <option>Roads</option>
            <option>Drainage</option>
            <option>Street Lights</option>
            <option>Water Supply</option>
            <option>Garbage</option>
            <option>Others</option>

          </select>

          <textarea
            rows="5"
            name="issue"
            placeholder="Describe your grievance"
            value={formData.issue}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Submit Grievance
          </button>

        </form>

      </motion.div>

    </section>

  );

};

export default GrievanceForm;