import { useState } from "react";
import { useLanguage } from "../../../core/context/LanguageContext";
import useContactForm from "../hooks/useContactForm";

export default function ContactForm() {
  const testMode = false;

  const {
    formData,
    errors,
    isFormSent,
    handleFieldChange,
    handleSubmit,
    isAnyFieldWrong,
  } = useContactForm(testMode);

  const isInvalid = isAnyFieldWrong();

  const { t } = useLanguage();

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        max-w-xl mx-auto p-4 rounded-lg shadow-sm space-y-4
        ${isAnyFieldWrong() ? "bg-gray-50" : "bg-blue-50"}
      `}
    >
      <h2 className="text-2xl font-bold text-center">
        {t("contact.contact-me")}
      </h2>

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
          onChange={(e) => handleFieldChange(e.target, t)}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-700">{errors.name}</p>
        )}
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
          onChange={(e) => handleFieldChange(e.target, t)}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-700">{errors.email}</p>
        )}
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
          onChange={(e) => handleFieldChange(e.target, t)}
        />
        {errors.message && (
          <p className="text-xs text-red-700">{errors.message}</p>
        )}
      </div>

      {isFormSent && (
        <div className="bg-green-100 p-2">
          <p className="text-green-800 text-center text-lg">
            {t("contact.form.successful-submit-1")}
          </p>
          <p className="text-green-800 text-center text-sm">
            {t("contact.form.successful-submit-2")}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isInvalid}
        className={`
          w-full bg-blue-600 text-white py-2 rounded
          ${
            isInvalid
              ? "bg-gray-500/60 cursor-not-allowed"
              : "hover:bg-blue-400 transition cursor-pointer"
          }
        `}
      >
        {isInvalid
          ? t("contact.form.cant-send-button")
          : t("contact.form.send-button")}
      </button>
    </form>
  );
}
