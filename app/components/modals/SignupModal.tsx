"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import useSignupModal from "./useSignupModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";

const SignupModal = () => {
  const router = useRouter();
  const signupModal = useSignupModal();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  //Submit function
  const submitSignup = async () => {
    const formData = {
      email: email,
      password1: password1,
      password2: password2,
    };

    const response = await apiService.post(
      "/api/auth/register/",
      JSON.stringify(formData)
    );

    if (response.access) {
      //handleLogin

      signupModal.close();

      router.push("/");
    } else {
      const tempErrors: string[] = Object.values(response).map((error: any) => {
        return error;
      });

      setErrors(tempErrors);
    }
  };

  const content = (
    <>
      {/* <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please log in</h2> */}

      <form action={submitSignup} className="space-y-4">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your email address..."
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />

        <input
          onChange={(e) => setPassword1(e.target.value)}
          type="password"
          placeholder="Your password..."
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />

        <input
          onChange={(e) => setPassword2(e.target.value)}
          type="password"
          placeholder="Repeat password..."
          className="w-full h-[54px] border px-4 border-gray-300 rounded-xl"
        />

        {errors.map((error, index) => {
          return (
            <div
              key={`error_${index}`}
              className="p-5 bg-airbnb text-white rounded-xl opacity-80"
            >
              {error}
            </div>
          );
        })}

        <CustomButton label="Submit" onClick={submitSignup}></CustomButton>
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
