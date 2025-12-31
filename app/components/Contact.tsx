"use client";
import { useState } from "react";

interface FormData {
  name: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          lastname: "",
          email: "",
          subject: "",
          message: "",
        }); // Reset form
      } else {
        setStatus(result.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="tp-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                {/* Email */}
                <div className="col col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="info-icon">
                        <i
                          className="fa fa-envelope tp-icon"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Email Us</h2>
                      <p>onyebuekes93@gmail.com</p>
                      <p>samuelonyebueke0311@gmail.com</p>
                    </div>
                  </div>
                </div>
                {/* Call */}
                <div className="col col-xl-6 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="info-icon">
                        <i
                          className="fa fa-phone tp-icon"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Call Now</h2>
                      <p>+234 8131880839</p>
                      <p>+234 9021130210</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-title section-title2 text-center">
              <span>Contact</span>
              <h2>Have Any Question?</h2>
            </div>

            <div className="tp-contact-form-area">
              <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                      />
                      <p></p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                      />
                      <p></p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <p></p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <p></p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-field">
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-submit">
                      <button
                        type="submit"
                        className="template-btn"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>

                      {status && (
                        <p
                          style={{
                            marginTop: "10px",
                            color: status.includes("success") ? "white" : "red",
                          }}
                        >
                          {status}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Optional map section retained but disabled */}
      {/* <section className="tp-contact-map-section">
        <div className="tp-contact-map"></div>
      </section> */}
    </section>
  );
}
