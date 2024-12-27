import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w4wqkgl", // Your EmailJS Service ID
        "template_4tqq56r", // Your EmailJS Template ID
        form.current,
        "kBw-W81lLkoNQ8Yh4" // Your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSuccessMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          setSuccessMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
        {successMessage && (
          <p
            className={`mt-4 text-center font-medium ${
              successMessage.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
