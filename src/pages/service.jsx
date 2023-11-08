'use client';

import React from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import { Images } from '@@/assets';
import NavigationBar from "@@/components/NavigationBar";
import Head from "next/head";

const Service = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Infinitum Service</title>
      </Head>
      <NavigationBar/>
      <div className="flex flex-col items-center justify-center m-5 p-10 font-serif">
        <div className="font-bold text-4xl">
          <span>Our Service</span>
        </div>
        <div className="p-4 grid grid-cols-3 gap-4">
          {[
            {
              title: `Heart Visualization`,
              image: Images.heart_service,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco l
              aboris nisi ut aliquip ex ea commodo consequat`,
            },
            {
              title: `Real-Time Report`,
              image: Images.real_time_report,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco l
              aboris nisi ut aliquip ex ea commodo consequat`,
            },
            {
              title: `24 Hours AI Chatbot`,
              image: Images.ai_chatbot,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco l
              aboris nisi ut aliquip ex ea commodo consequat`,
            }
          ].map(({ title, image, description }) => {
            return (
              <div 
                key={title} 
                className="border rounded flex flex-col items-center m-5 p-5"
              >
                <Image
                  alt={`Logo`}
                  src={image}
                  className={`w-1/4`}
                />
                <p className="font-semibold text-lg m-4">{title}</p>
                <p>{description}</p>
              </div>
            )
          })}
        </div>
        <button 
          className="border rounded-xl outline-dashed outline-cyan-200 py-2 px-4"
          type="button"
          onClick={() => {
            router.push({
              pathname: `/doctor`,
            });
          }}  
        >
          <span className="flex items-center">
            <span className="mr-2 text-lg">Doctor</span>
            <Image
              className={`w-6`}
              alt={`Arrow right`}
              src={Images.arrow_right}
            />
          </span>
        </button>
      </div>
    </>
  );
};

export default Service;