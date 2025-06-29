export default function CompactTopbar() {
  const linkedinLink =
    "https://www.linkedin.com/in/roger-navarro-desarrollador/";
  const githubLink = "https://github.com/Roger486";

  return (
    <section className="flex items-center justify-center gap-3 mt-10">
        {/* Contact button */}
        <button
          className=" flex border-2 px-3 py-1 rounded-full text-xs cursor-pointer"
          aria-label="Contact me"
          title="Contact me"
        >
          Contact me
        </button>
        <div className="flex gap-2">
        {/* Gitbub profile link */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <svg
              className="w-6 h-6 fill-current"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="githubIconTitle"
            >
              <title id="githubIconTitle">GitHub icon</title>
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.2 11.44c.6.11.82-.26.82-.58v-2.18c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.76c-1.09-.75.08-.74.08-.74a2.5 2.5 0 011.83 1.23 2.55 2.55 0 003.48 1 2.55 2.55 0 01.76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.62 4.62 0 011.23-3.2 4.28 4.28 0 01.12-3.16s1-.32 3.3 1.23a11.45 11.45 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.28 4.28 0 01.12 3.16 4.62 4.62 0 011.23 3.2c0 4.61-2.8 5.62-5.48 5.92a2.85 2.85 0 01.81 2.2v3.27c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          {/* Linkedin profile link */}
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <svg
              className="w-6 h-6 fill-current"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="linkedinIconTitle"
            >
              <title id="linkedinIconTitle">LinkedIn icon</title>
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM7.5 7h4.7v2.2h.1c.65-1.23 2.23-2.5 4.6-2.5 4.93 0 5.85 3.25 5.85 7.46V24h-5v-7.65c0-1.83-.03-4.2-2.56-4.2-2.57 0-2.96 2-2.96 4.06V24h-5V7z" />
            </svg>
          </a>
        </div>
    </section>
  );
}
