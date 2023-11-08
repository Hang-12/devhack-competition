import React from 'react';
import Link from 'next/link';
import { Images } from '@@/assets';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Underline from './Underline';

const NavigationBar = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex">
      <div className="ml-10 top-0 left-0 right-0 w-full p-4 flex justify-between items-center">
        <Image
          className="w-20 h-20 cursor-pointer"
          alt={`Infinitum Icon`}
          src={Images.infinitum_icon}
          onClick={() => {
            router.push({
              pathname: `/`,
            });
          }}
        />
        {[
          {
            href: `/service`,
            title: `Service`,
          },
          {
            href: `/doctor`,
            title: `Doctor`,
          },
          {
            href: `/about-us`,
            title: `About Us`,
          },
        ].map(({ href, title }) => {
          return (
            <Link key={title} href={href}>
              <div>
                <div>
                  <span className="font-semibold shadow-lg">
                    {title}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
        <div className="absolute right-10 space-x-4 flex items-center font-semibold">
          <button
            type="button"
            onClick={() => {
              router.push({
                pathname: `/login`,
              });
            }}
          >
            <span>Login</span>
          </button>
          <span>|</span>
          <button 
            className="border rounded-full px-4 py-2 bg-gray-400"
            type="button"
            onClick={() => {
              router.push({
                pathname: `/register`,
              });
            }}
          >
            <span>Sign Up</span>
          </button>
        </div>
      </div>
      <main className="ml-24 w-full">
        {children}
        <Underline width={4}/>
      </main>
    </div>
  );
};

export default NavigationBar;