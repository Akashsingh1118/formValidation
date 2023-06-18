import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (formData.name === "") {
      alert("Please enter your name.");
      return;
    }

    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    if (formData.gender === "") {
      alert("Please select your gender.");
      return;
    }

    if (formData.phoneNumber === "") {
      alert("Please enter your phone number.");
      return;
    }

    if (formData.phoneNumber.length !== 10) {
      alert("Please enter a valid phone number");
      return;
    }
    // Display the entered values
    alert(
      `Name: ${formData.name}\nEmail: ${formData.email}\nGender: ${formData.gender}\nPhone Number: ${formData.phoneNumber}`
    );
  };

  return (
    <div class="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
