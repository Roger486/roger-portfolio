import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <div className="relative min-h-screen">
    {/* Fondo invertido */}
    <div
      className="bg-640 bg-responsive absolute inset-0 bg-repeat bg-auto filter invert pointer-events-none"
      aria-hidden="true"
    />
    {/* Contenido normal */}
    <div className="relative bg-white/50">
      <StrictMode>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </StrictMode>
    </div>
  </div>
);
