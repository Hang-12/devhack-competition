import React from 'react';
import Link from 'next/link';
import { Images } from '@@/assets';
import Image from 'next/image';
import { useRouter } from 'next/router';


const Sidebar = () => {
  <div className="bg-color-blue">
    <Image
      alt={`Infinitum Icon`}
      src={Images.infinitum_icon}
    />
  </div>
};

export default Sidebar;