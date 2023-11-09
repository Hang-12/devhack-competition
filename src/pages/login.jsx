'use client';

import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import API from '@@/endpoints/api';
import Image from 'next/image';
import { Images } from '@@/assets';

const LoginPage = () => {
  const [username, setUsername] = useState(`weihang@gmail.com`);
  const [password, setPassword] = useState(`Hello@123`);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const router = useRouter();

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   const resultLogin = await API.login({ username, password });

  //   if (resultLogin.status !== 200 ) {
  //     return toast.error(resultLogin.response.message);
  //   }

  //   router.reload();
  // }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Infinitum Login</title>
      </Head>
      <div className="p-10 rounded-lg shadow-xl">
        <Image
          alt={`Back`}
          src={Images.arrow_left}
          className={`w-8 mb-4`}
          onClick={() => {
            router.back();
          }}
        />
        <h2 className="flex items-center justify-center text-xl font-bold mb-4">Infinitum | Login Page</h2>
        <form>
          <div className="mb-4">
            <input
              className="border rounded-full px-3 py-2 w-full"
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="Enter Username"
              onChange={(e) => {
                return setUsername(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <div className="relative">
              <input
                className="border rounded-full px-3 py-2 w-full"
                type={isPasswordVisible ? `text` : `password`}
                id="password"
                name="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => {
                  return setPassword(e.target.value);
                }}
              />
              <Image
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                alt={`Check Password`}
                src={isPasswordVisible ? Images.visibility_eye : Images.invisibility_eye}
                onClick={(e) => {
                  return setIsPasswordVisible((prevState) => {
                    return (!prevState);
                  });
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center text-white bg-button px-4 py-2 rounded-full">
            <button
              type="button"
              onClick={() => {
                router.push({
                  pathname: `/doctor-dashboard`,
                });
              }}
            >
              Log In (Currently Proceed to Dashboard)
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center mt-4">
          <button
            type="button"
            onClick={() => {
              router.push({
                pathname: `/register`,
              });
            }}
          >
            <span>Create Account</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;