"use client";

import React from "react";
import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">John Doe</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            officia molestias culpa temporibus animi saepe voluptate eaque, eum
            quos nihil voluptas nam asperiores totam reprehenderit atque
            aspernatur ea tenetur nisi.
          </p>
        </div>

        <div className="w-[80%] ml-[20%] px-6 rounded-xl bg-blue-200">
          <p className="font-bold text-gray-500">John Doe</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            officia molestias culpa temporibus animi saepe voluptate eaque, eum
            quos nihil voluptas nam asperiores totam reprehenderit atque
            aspernatur ea tenetur nisi.
          </p>
        </div>
      </div>

      <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 bg-gray-200 rounded-xl"
        />

        <CustomButton
          label="Send"
          onClick={() => console.log("Clicked")}
          className="w-[100px]"
        />
      </div>
    </>
  );
};

export default ConversationDetail;
