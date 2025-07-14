import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormSent, setIsFormSent] =useState(false);

  const regEx = {
    name: /^[A-Za-z\s]{3,}$/,
    email: /^\S+@\S+\.\S+$/,
    message: /^.{10,}$/,
  }

  function handleFieldChange({ name, value }) {
    setErrors(prev => {
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });

    setFormData(prev => { 
      return {...prev, [name]: value}
    });

    if (value.trim() === "") {
      setErrors(prev => ({ ...prev, [name]: "This field is mandatory."}))
    }
    if (!regEx[name].test(value)) {
      if (name === "name") setErrors(prev => ({ ...prev, [name]: "This field must be at least 3 characters long and contain only letters and spaces."}))
      else if (name === "email") setErrors(prev => ({ ...prev, [name]: "Please input a valid email format."}))
      else if (name === "message") setErrors(prev => ({ ...prev, [name]: "This field must be at least 10 characters long."}))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isAnyFieldWrong()) return;

    try {
      const response = await sendData();

      setFormData({name: "", email: "", message: ""})
      setIsFormSent(true);

    } catch (err) {
      console.error(err);
    }
    
  }

  async function sendData() {
    const testMode = true;
    const url = "https://formspree.io/f/manbwpdp";
    let response;

    if (testMode) {
      response = {
        ok: true,
        json: async () => ({ message: "fake response" }),
      };
    } else {
      response = await fetch(url,{
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
        }
      );
    }
    
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    return await response.json();
  }

  function isAnyFieldWrong() {
    return Object.keys(errors).length > 0 || Object.keys(formData).some(field => formData[field].trim() === "")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 bg-gray-50 rounded shadow space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Contáctame</h2>

      <div>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          className={`
            w-full border p-2 rounded bg-white
            ${errors.name ? "border-red-700 focus:outline-red-700" : ""}
          `}
          onChange={(e) => handleFieldChange(e.target)}
        />
        {errors.name && <p className="mt-1 text-sm text-red-700">{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="johndoe@email.com"
          value={formData.email}
          className={`
            w-full border p-2 rounded bg-white
            ${errors.email ? "border-red-700 focus:outline-red-700" : ""}
          `}
          onChange={(e) => handleFieldChange(e.target)}
        />
        {errors.email && <p className="mt-1 text-sm text-red-700">{errors.email}</p>}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Dear Roger..."
          value={formData.message}
          className={`
            w-full border p-2 rounded bg-white
            ${errors.message ? "border-red-700 focus:outline-red-700" : ""}
          `}
          onChange={(e) => handleFieldChange(e.target)}
        />
        {errors.message && <p className="text-sm text-red-700">{errors.message}</p>}
      </div>

      {isFormSent && (<div>
        <p className="text-green-700 text-center text-xl">
          🫡 ¡Mensaje enviado correctamente!
        </p>
        <p className="text-green-700 text-center text-sm">
          📨 Te contestaré lo antes posible.
        </p>
      </div>)}

      <button
        type="submit"
        disabled={isAnyFieldWrong()}
        className={`
          w-full bg-blue-600 text-white py-2 rounded
          ${isAnyFieldWrong() ? "bg-gray-500 cursor-not-allowed opacity-60" : "hover:bg-blue-400 transition cursor-pointer"}
        `}
      >
        Enviar
      </button>
    </form>
  );
}
