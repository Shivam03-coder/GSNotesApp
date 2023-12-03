import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Layout from "../components/layout/Layout";

function ContactPage() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <Layout>
      <div
        className="contactpage rounded-lg max-lg:pt-12 "
      >
        <motion.div
          className="mailFeild pt-14 max-lg:pt-6 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/shivam850anand@gmail.com"
                      method="POST"
                      className="flex w-[50%] space-y-10 max-lg:w-[80%]  mx-auto py-9 flex-col justify-center items-center "
          >
            <input
              className="w-full rounded-[6px] bg-[#176B87] text-[yellow] f placeholder-[#AED2FF] p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-[red] mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full rounded-[6px] bg-[#176B87] text-[yellow]  placeholder-[#AED2FF] p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-[red] mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full rounded-[6px] bg-[#176B87] text-[yellow]  placeholder-[#AED2FF] p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-[red] mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              id="SendBtn"
              className="p-4 rounded-[12px] bg-[#3881e8] font-semibold text-black mt-5 "
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
        </div>
    </Layout>
  );
}

export default ContactPage;
