import React from 'react';
import Link from 'next/link';
import { Images } from '@@/assets';
import Image from 'next/image';
import { useRouter } from 'next/router';

// const ACCESS = {
//   DC: [
//     {
//       href: `/dashboard`,
//       title: `Dashboard`,
//     },
//     {
//       href: `/patient-list`,
//       title: `Patient List`,
//     },
//   ],
//   NR: [

//   ],
//   PT: [

//   ],
//   RE: [

//   ],
// }

const Sidebar = ({ children }) => {
  const router = useRouter();
  
  // const handleLogout = () => {
  //   router.reload();
  // }

  return (
    <div className="flex">
      <div className="fixed top-0 bottom-0 h-full p-4 pr-0 border-r-[1px] flex flex-col justify-between w-24 md:w-60 no-scrollbar bg-sidebar">
        <div className="flex flex-col">
          <Image
            className={`w-4/5 aspect-square self-center mr-4 object-contain bg-white rounded-lg`}
            alt={`Infinitum Icon`}
            src={Images.infinitum_icon}
          />
          {[
            {
              href: `/doctor-dashboard`,
              title: `Doctor Dashboard`,
              image: Images.dashboard,
            },
            {
              href: `/doctor-patient-list`,
              title: `Doctor Patient List`,
              image: Images.patient_list,
            },
            {
              href: `/doctor-appointment`,
              title: `Doctor Appointment`,
              image: Images.appointment_icon,
            },
            {
              href: `/patient-dashboard`,
              title: `Patient Dashboard`,
              image: Images.dashboard,
            },
            {
              href: `/health-status`,
              title: `Patient Heart`,
              image: Images.heart_icon,
            },
            {
              href: `/patient-appointment`,
              title: `Patient Appointment`,
              image: Images.appointment_icon,
            },
          ].map(({ href, title, image }) => {
            return (
              <Link key={title} href={href}>
                <div
                  className={`hover:bg-overlay-color cursor-pointer my-4 p-3 rounded rounded-r-none ${
                    router.route === href ? `bg-overlay-color` : ``
                  }`}
                >
                  <div className="flex items-center">
                    <Image alt={title} src={image} className="w-10"/>
                    <span className="ml-2 text-on-primary-color invisible md:visible">
                      {title}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {/* <button className="mr-4" onClick={handleLogout}>
          <span>Logout</span>
        </button> */}
        <button 
          className="mr-4"
          type="button"
          onClick={() => {
            router.push({
              pathname: `/`,
            });
          }}
        >
          <span>Logout (Currently Proceed to HomePage)</span>
        </button>
      </div>
      <main className="ml-24 md:ml-60 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;