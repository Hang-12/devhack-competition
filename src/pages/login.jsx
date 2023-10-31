'use client';

import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { Images } from '@@/assets';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Infinitum Login</title>
      </Head>
      <div className="p-8 rounded shadow-xl">
        <h2 className="flex items-center justify-center text-xl font-bold mb-4">Infinitum | Login Page</h2>
        <form>
          <div className="mb-4">
            <label className="font-semibold mb-2">
              Username
            </label>
            <input
              className="border rounded px-3 py-2 w-full"
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
            <label className="font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                className="border rounded px-3 py-2 w-full"
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
          <div className="flex justify-center items-center text-white bg-blue-500 px-4 py-2 rounded">
            <button>
              Log In
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center text-white bg-blue-500 px-4 py-2 mt-2 rounded">
          <button
            onClick={() => {
              router.push({
                pathname: `/register`,
              })
            }}
          >
            Do not have an account? Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;