import { useForm } from "@formspree/react";
import { E164Number } from "libphonenumber-js/core";
import { env } from "process";
import { ChangeEvent, useState } from "react";
import PhoneInput from "react-phone-number-input/input";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [formState, handleFormSubmit] = useForm(`${process.env.FORM_ID as string}`);
  
  return (
    <div id="Contact">
      <section className="bg-blue-ocean">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-center text-white text-xl sm:text-left">
                {`Have any questions? Send me a message and I'll get back to you!`}
              </p>
            </div>

            <div className="rounded-lg bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form
              onSubmit={handleFormSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-black p-3 text-sm"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setName(e.target.value);
                    }}
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border border-black p-3 text-sm"
                      placeholder="Email address"
                      value={email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <PhoneInput
                      value={phoneNumber}
                      onChange={(e: E164Number) => {
                        e && setPhoneNumber(e.toString());
                      }}
                      placeholder="Phone Number"
                      className="w-full rounded-lg border border-black p-3 text-sm"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border border-black p-3 text-sm"
                    placeholder="Message"
                    value={message}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                      setMessage(e.target.value);
                    }}
                    rows={8}
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4 flex flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 hover:bg-stone-900 font-medium text-white sm:w-auto disabled:bg-gray-500"
                    disabled={formState.submitting}
                  >
                    Submit
                  </button>
                  {formState.succeeded && <p className="text-blue-ocean">Submitted!</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
