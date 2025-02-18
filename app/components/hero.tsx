import { Link } from "react-router";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx prisma@latest init --db");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      <div className="mx-auto h-screen text-center max-w-6xl max-md:px-6  flex flex-col items-center justify-center ">
        <Link
          to="https://www.npmjs.com/package/ezyenv"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full bg-gray-800 text-white  hover:bg-gray-700"
        >
          <span className="text-sm px-4 py-1.5 font-medium">
            Ezyenv is out! See what's new
          </span>
          <svg
            aria-hidden="true"
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">
            Streamlining Environment Variable Management with EzyEnv
          </h1>
          <p className="mb-8 text-base font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-400">
            Effortlessly push environment configurations to GitHub with Ezyenv.
            It automatically generates sample .env files, making it easy to
            share templates without exposing sensitive credentials.
          </p>

          <pre
            className="relative group mb-8 w-full max-w-fit p-[1px] rounded-lg"
            style={{
              background: "linear-gradient(to right, #4F46E5, #06B6D4)",
            }}
          >
            <div className="absolute -inset-[1px] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-200" />

            <div className="relative items-center justify-center gap-5 flex p-2  bg-[rgb(45,55,72)] rounded-lg">
              <span className="text-[#94A3B8] mr-2">$</span>
              <code className="">npx prisma@latest init --db</code>
              <button
                type="button"
                className="relative opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:text-indigo-400 text-gray-400"
                onClick={handleCopy}
                title="Copy to clipboard"
              >
                {copied ? (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-700 text-gray-200 text-xs rounded">
                    Copied!
                  </span>
                ) : null}
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H16C17.1046 21 18 20.1046 18 19V7C18 5.89543 17.1046 5 16 5H14M8 5V3C8 1.89543 8.89543 1 10 1H12C13.1046 1 14 1.89543 14 3V5M8 5H14" />
                </svg>
              </button>
            </div>
          </pre>
        </div>
        <div className="flex  mb-8 lg:mb-16 gap-6 flex-row sm:justify-center ">
          <Link
            to="https://github.com/broisnischal/ezyenv"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-transparent hover:border-gray-700 bg-gray-800 hover:bg-gray-700/50 transition-all duration-200"
          >
            <svg
              aria-hidden="true"
              className="mr-2 -ml-1 w-5 h-5 transition-transform group-hover:scale-110 group-hover:text-white  duration-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </Link>
          <Link
            to="https://www.npmjs.com/package/ezyenv"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border border-gray-700 text-white group hover:bg-gray-800/50 transition-all duration-200"
          >
            <svg
              aria-hidden="true"
              className="mr-2 -ml-1 w-5 h-5 transition-colors duration-200 group-hover:fill-[#CB3837]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
            </svg>
            npm
          </Link>
        </div>{" "}
      </div>
    </section>
  );
}
