import { useState } from "react";

// RegEx outside the hook to avoid unnecessary renders
const regEx = {
  name: /^[A-Za-z\s]{3,}$/,
  email: /^\S+@\S+\.\S+$/,
  message: /^[\s\S]{10,300}$/
}

export default function useContactForm(testMode = false) {

  // Data block

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isFormSent, setIsFormSent] = useState(false);

  // Field change block

  function handleFieldChange({ name, value }, t) {
    setIsFormSent(false);
    setErrors(prev => {
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });

    setFormData(prev => {
      return { ...prev, [name]: value }
    });

    if (value.trim() === "") {
      setErrors(prev => ({ ...prev, [name]: t("contact.form.errors.required") }))
    } else if (!regEx[name].test(value)) {
      const key = `contact.form.errors.${name}`;
      setErrors(prev => ({ ...prev, [name]: t(key) }));
    }
  }

  // Submit block

  async function handleSubmit(e) {
    e.preventDefault();
    if (isAnyFieldWrong()) return;

    try {
      const response = await sendData();

      setFormData({ name: "", email: "", message: "" });
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
      response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    }

    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    return await response.json();
  }

  // Wrong fields check block

  function isAnyFieldWrong() {
    return (
      Object.keys(errors).length > 0 ||
      Object.keys(formData).some((field) => formData[field].trim() === "")
    );
  }

  return {
    formData,
    errors,
    isFormSent,
    handleFieldChange,
    handleSubmit,
    isAnyFieldWrong
  };
}