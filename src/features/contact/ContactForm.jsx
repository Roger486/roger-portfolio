import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormSent, setIsFormSent] = useState(false);

  const testMode = false;

  const { t } = useLanguage();

  const regEx = {
    name: /^[A-Za-z\s]{3,}$/,
    email: /^\S+@\S+\.\S+$/,
    message: /^[\s\S]{10,300}$/
  }

  function handleFieldChange({ name, value }) {
    setIsFormSent(false);
    setErrors(prev => {
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });

    setFormData(prev => { 
      return {...prev, [name]: value}
    });

    if (value.trim() === "") {
      setErrors(prev => ({ ...prev, [name]: t("contact.form.errors.required")}))
    }
    if (!regEx[name].test(value)) {
      const key = `contact.form.errors.${name}`;
      setErrors(prev => ({ ...prev, [name]: t(key) }));
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
      className={`
        max-w-xl mx-auto p-4 rounded-lg shadow-sm space-y-4
        ${isAnyFieldWrong() ? "bg-gray-50" : "bg-blue-50"}
      `}
    >
      <h2 className="text-2xl font-bold text-center">{t("contact.contact-me")}</h2>

      <div>
        <label htmlFor="name">{t("contact.form.name-label")}</label>
        <input
          type="text"
          name="name"
          placeholder={t("contact.form.name-placeholder")}
          value={formData.name}
          className={`
            w-full border border-blue-400 p-2 rounded bg-white focus:outline-blue-500
            ${errors.name ? "border-red-700 focus:outline-red-700" : ""}
          `}
          onChange={(e) => handleFieldChange(e.target)}
        />
        {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">{t("contact.form.email-label")}</label>
        <input
          type="email"
          name="email"
          placeholder={t("contact.form.email-placeholder")}
          value={formData.email}
          className={`
            w-full border border-blue-400 p-2 rounded bg-white focus:outline-blue-500
            ${errors.email ? "border-red-700 focus:outline-red-700" : ""}
          `}
          onChange={(e) => handleFieldChange(e.target)}
        />
        {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message">{t("contact.form.message-label")}</label>
        <textarea
          name="message"
          placeholder={t("contact.form.message-placeholder")}
          value={formData.message}
          className={`
            w-full border border-blue-400 p-2 rounded bg-white focus:outline-blue-500
            ${errors.message ? "border-red-700 focus:outline-red-700" : ""}
          `}
          onChange={(e) => handleFieldChange(e.target)}
        />
        {errors.message && <p className="text-xs text-red-700">{errors.message}</p>}
      </div>
      
      {isFormSent && (
        <div className="bg-green-100 p-2">
          <p className="text-green-800 text-center text-lg">
            {t("contact.form.succesful-submit-1")}
          </p>
          <p className="text-green-800 text-center text-sm">
            {t("contact.form.succesful-submit-2")}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isAnyFieldWrong()}
        className={`
          w-full bg-blue-600 text-white py-2 rounded
          ${isAnyFieldWrong() ? "bg-gray-500/60 cursor-not-allowed" : "hover:bg-blue-400 transition cursor-pointer"}
        `}
      >
        {isAnyFieldWrong() ? t("contact.form.cant-send-button") : t("contact.form.send-button")}
      </button>
    </form>
  );
}
