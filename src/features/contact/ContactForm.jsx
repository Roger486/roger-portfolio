import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const statuses = {
    success: "¡Mensaje enviado!",
    missingfields: "Por favor completa todos los campos",
    etc: "other messages",
  };

  return (
    <form className="max-w-xl mx-auto p-4 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold text-center">Contáctame</h2>

      <input
        type="text"
        name="name"
        placeholder="John Doe"
        className="w-full border p-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="johndoe@email.com"
        className="w-full border p-2 rounded"
      />

      <textarea
        name="message"
        placeholder="Dear Roger..."
        className="w-full border p-2 rounded h-32"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-400 transition cursor-pointer"
      >
        Enviar
      </button>
    </form>
  );
}
