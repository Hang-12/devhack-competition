'use client';

import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Images } from '@@/assets';
import NavigationBar from '@@/components/NavigationBar';
import Head from 'next/head';

const HomePage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Infinitum HomePage</title>
      </Head>
      <NavigationBar/>
      <div className="flex items-center justify-center m-10 p-12">
        <div className="font-serif max-w-screen-md p-2">
          <div className="flex flex-between items-center relative">
            <div className="w-1/2 text-center text-4xl border rounded-xl py-4 px-5 bg-dark-blue shadow-xl">
              <p>Welcome to</p>
            </div>
            <div className="w-1/2 absolute left-80 text-center mt-20 text-4xl border rounded-xl py-4 px-5 bg-light-blue text-white shadow-xl">
              <p>Infinitum</p>
            </div>
          </div>
          <div className="mt-16">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco l
              aboris nisi ut aliquip ex ea commodo consequat.Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex items-center justify-center gap-7 mt-6">
            <button
              className="border rounded-full px-4 py-2 bg-gray-400 text-white mb-4"
              type="button"
              onClick={() => {
                router.push({
                  pathname: `/login`,
                });
              }}
            >
              <span>Login</span>
            </button>
            <button
              className="border rounded-full px-4 py-2 mb-4"
              type="button"
              onClick={() => {
                router.push({
                  pathname: `/about-us`,
                });
              }}
            >
              <span className="flex items-center">
                <span className="mr-2">More Info</span>
                  <Image
                    className={`w-5`}
                    alt={`Information`}
                    src={Images.info}
                  />
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            className={`w-3/4 ml-10`}
            alt={`Doctor`}
            src={Images.doctor_main}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;