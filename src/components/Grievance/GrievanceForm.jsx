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

    alert("உங்கள் குறை பதிவு வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!");

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
          மக்கள் சேவை
        </span>

        <h2>
          உங்கள் குறையை பதிவு செய்யுங்கள்
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grievance-form"
        >

          <input
            type="text"
            name="name"
            placeholder="முழு பெயர்"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="கைபேசி எண்"
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
              வார்டை தேர்வு செய்யவும்
            </option>

            {[...Array(27)].map((_, i) => (
              <option key={i}>
                வார்டு {i + 1}
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
              பிரிவை தேர்வு செய்யவும்
            </option>

            <option>சாலை</option>
            <option>வடிகால்</option>
            <option>தெரு விளக்கு</option>
            <option>குடிநீர்</option>
            <option>குப்பை அகற்றுதல்</option>
            <option>மற்றவை</option>

          </select>

          <textarea
            rows="5"
            name="issue"
            placeholder="உங்கள் குறையை விவரிக்கவும்"
            value={formData.issue}
            onChange={handleChange}
            required
          />

          <button type="submit">
            குறையை சமர்ப்பிக்கவும்
          </button>

        </form>

      </motion.div>

    </section>

  );

};

export default GrievanceForm;