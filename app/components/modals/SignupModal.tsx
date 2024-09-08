"use client";

import { useState } from "react";

import useSignupModal from "./useSignupModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
  const signupModal = useSignupModal();

  const content = (
    <>
      {/* <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please log in</h2> */}

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Your email address..."
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />

        <input
          type="password"
          placeholder="Your password..."
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />

        <input
          type="password"
          placeholder="Repeat password..."
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          The error message
        </div>

        <CustomButton
          label="Submit"
          onClick={() => console.log("Test")}
        ></CustomButton>
      </form>
    </>
  );

  return (
    <Modal
      label="Sign up"
      close={signupModal.close}
      content={content}
      isOpen={signupModal.isOpen}
    ></Modal>
  );
};

export default SignupModal;
