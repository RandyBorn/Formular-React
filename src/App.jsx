import { useEffect } from "react";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {}, [submitted]);
  // onChange Handler für die Eingabe
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(!submitted);
  }

  return (
    <>
      <div>
        <h1>Feedback Form</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              name="message"
              type="textarea"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Absenden</button>
          </form>
        ) : (
          <p>hier feedpack sendet</p>
        )}
      </div>
    </>
  );
}

export default App;
