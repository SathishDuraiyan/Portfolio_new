import React, { useState } from "react";
import Navbar from "./Navbar";
// import { Button } from "../Components/Button";
import { Input } from "../Components/Input"
import { Textarea } from "../Components/Textarea";
import { Alert, AlertDescription, AlertTitle } from "../Components/Alert";

const Contact: React.FC = () => {
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Submit the form data to the API
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setAlert({ type: "success", message: "Message sent successfully!" });
      })
      .catch((error) => {
        console.error("Error:", error);
        setAlert({ type: "error", message: "An error occurred. Please try again." });
      });
  };

  return (
    <div className="text-white bg-[#111111] w-full h-screen">
      <Navbar />

      <div className="flex mt-24 w-full h-100 justify-center items-center">
        <div className="flex flex-col border-2 border-[#222222] p-12 gap-5 rounded-2xl">
          <h2 className="font-bold text-white text-2xl">Contact Me</h2>
          <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="dab51914-704d-4c49-ad61-b5179f3639f1"
            />

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="first_name">Name</label>
                <Input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="eg., Sathish Duraiyan"
                  className="w-120"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="eg., example@email.com"
                  className="w-120"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="eg., Hey, How are You?"
                  required
                />
              </div>
              <button
            type="submit"
            className="w-full p-2 rounded bg-[#27272a] hover:bg-[#ededed] hover:text-zinc-800 transition ease-in-out duration-300 font-semibold"
            >
            Submit Form
            </button>
            </div>
          </form>
          {alert && (
            <Alert className={alert.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
              <AlertTitle>{alert.type === "success" ? "Success!" : "Error!"}</AlertTitle>
              <AlertDescription>{alert.message}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;