import React from 'react';
import Underline from './Underline';
import Image from 'next/image';
import { Images } from '@@/assets';

const Header = () => {
  return (
    <div className="flex flex-col px-2 pt-2">
      <div className="pt-2">
        <div className="col-span-2 flex mb-4">
          <Image
            className={`mr-8 border rounded-full w-16 aspect-square inline-block`}
            alt="Doctor"
            src={Images.doctor_profile}
          />
          <div className="inline-block ml-4">
            <p className="block text-md font-bold mb-2">
              Welcome back,
            </p>
            {/* <p>
              {`${user.name}`}
            </p> */}
            <p className="text-lg font-semibold">
              Yong Wei Hang
            </p>
          </div>
        </div>
        <Underline/> 
      </div>
      {/* <p>I hope you are in a good mood because there are patients waiting for you</p> */}
    </div>
  );
};

export default Header;