import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorInput, setErrorInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, lastName, email, message].includes("")) {
      setErrorInput(true);

      setTimeout(() => {
        setErrorInput(false);
      }, 5000);
    }
  };
  return (
    <>
      <div className="bg-primary mt-[95px] text-light sm:mt-20 max-w-screen-lg mx-auto p-8 rounded-xl shadow-2xl">
        {errorInput && (
          <div className="bg-red-500/80 backdrop-blur-sm text-white font-semibold text-center py-3 rounded-lg mb-6 shadow-lg">
            <strong>¡Error!</strong>
            <br />
            You have to fill all the fields.
          </div>
        )}
        <div className="text-center mb-12">
          <h3 className="text-4xl sm:text-5xl leading-normal font-extrabold tracking-tight text-accent">
            Contact <span className="text-light">Us</span>
          </h3>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-light/80 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Name:
              </label>
              <input
                className="appearance-none block w-full bg-glass backdrop-blur-md text-light border-secondary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-glass-2 focus:border-accent shadow-inner"
                id="grid-first-name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-light/80 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name:
              </label>
              <input
                className="appearance-none block w-full bg-glass backdrop-blur-md text-light border-secondary rounded py-3 px-4 leading-tight focus:outline-none focus:bg-glass-2 focus:border-accent shadow-inner"
                id="grid-last-name"
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-light/80 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email:
              </label>
              <input
                className="appearance-none block w-full bg-glass backdrop-blur-md text-light border-secondary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-glass-2 focus:border-accent shadow-inner"
                id="grid-email"
                type="email"
                placeholder="correo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-light/80 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message:
              </label>
              <textarea
                rows="8"
                className="appearance-none block w-full bg-glass backdrop-blur-md text-light border-secondary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-glass-2 focus:border-accent shadow-inner"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="flex justify-center w-full px-3 mt-4">
              <button
                className="shadow-lg bg-accent hover:bg-accent/80 focus:shadow-outline focus:outline-none text-primary font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-glow-accent"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
