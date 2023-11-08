import React from "react";
import Head from "next/head";
import Sidebar from "@@/components/Sidebar";
import Container from "@@/components/Container";

const Health = () => {
  return (
    <Sidebar>
      <Container>
        <Head>
          <title>Patient List</title>
        </Head>
        <div className="flex items-center justify-center mt-10 text-3xl font-bold">
          <p>In Progress...</p>
        </div>
      </Container>
    </Sidebar>
      
  );
};

export default Health;

// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Container from '@@/components/Container';
// import Sidebar from '@@/components/Sidebar';
// import { useRouter } from 'next/router';

// const Component = () => {
//   const [patientID, setPatientID] = useState(``);
//   const [patients, setPatients] = useState([]);
  
//   const router = useRouter();

//   return (
//     <Sidebar>
//       <Container>
//         <div className="pl-4">
//           <p className="text-2xl font-bold mb-5">Patient List</p>
//           <ul className="divide-y">
//             <li className="py-4 grid grid-cols-3">
//               <div className="col-span-1">
//                 <p className="text-ml font-bold">{`Name`}</p>
//               </div>
//               <div className="col-span-1">
//                 <p className="text-ml font-bold">{`Status`}</p>
//               </div>
//               <div className="col-span-1">
//                 <p className="text-ml font-bold">{`Action`}</p>
//               </div>
//             </li>
//             {patients.map((patient) => {
//               return (
//                 <li key={patient.id} className="py-4 grid grid-cols-3">
//                   <div className="col-span-1">
//                     <p>{patient.name}</p>
//                   </div>
//                   <div className="ml-4 col-span-1">
//                     {user.type === `RE` && (
//                       <div className="flex">
//                         <button>
//                           Emergency
//                         </button>
//                         <button>
//                           Body Check Up
//                         </button>
//                         <button>
//                           Regular
//                         </button>
//                       </div>
//                     )}
//                     {user.type === `DC` && patient.status === `EM` && (
//                       <span>
//                         Emergency
//                       </span>
//                     )}
//                     {patient.status === `BC` && (
//                       <span>
//                         Body Check Up
//                       </span>
//                     )}
//                     {patient.status === `RE` && (
//                       <span>
//                         Regular
//                       </span>
//                     )}
//                   </div>
//                   <div className="ml-4 col-span-1">
//                     {user.type === `RE` && patient.action === `PD` && (
//                       <div>
//                         <button>
//                           Done
//                         </button>
//                         <button>
//                           In Progress
//                         </button>
//                       </div>
//                     )}
//                     {user.type === `DC` && patient.action === `PD` && (
//                       <span>
//                         Pending
//                       </span>
//                     )}
//                     {patient.action === `PG` && (
//                       <span>
//                         In Progress
//                       </span>
//                     )}                  
//                     {patient.action === `DN` && (
//                       <span>
//                         Done
//                       </span>
//                     )}
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </Container>
//     </Sidebar>
//   );
// };

// export default Component;