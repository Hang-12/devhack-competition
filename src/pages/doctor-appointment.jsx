'use client';

import React, { useState } from 'react';
import Container from '@@/components/Container';
import Sidebar from '@@/components/Sidebar';
import Underline from '@@/components/Underline';
import Header from '@@/components/Header';
import Head from 'next/head';

const Appointment = () => {
  const [patients, setPatients] = useState([]);

  return (
    <Sidebar>
      <Container>
        <Head>
          <title>Appointment</title>
          <meta name="description" content="Infinitum HealthCare"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Header/>
        <div className="p-6 m-5 border rounded-lg bg-appointment">
          <p className="text-2xl font-semibold mb-5">Upcoming Appointment</p>
          <div className="border rounded-lg mt-10 flex items-center justify-center bg-white">
            <ul className="divide-y">
              <li className="py-4 grid grid-cols-7">
                <div className="col-span-1">
                  <p className="text-ml font-bold">{`ID`}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-ml font-bold">{`Doctor`}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-ml font-bold">{`Date`}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-ml font-bold">{`Time`}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-ml font-bold">{`Patient Name`}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-ml font-bold">{`Age`}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-ml font-bold">{`Appointment Reason`}</p>
                </div>
              </li>
              {patients.map((patient) => {
                return (
                  <li key={patient.id} className="py-4 grid grid-cols-7">
                    <div className="col-span-1">
                      <p>{patient.id}</p>
                    </div>
                    <div className="col-span-1">
                      <p>{patient.doctor}</p>
                    </div>
                    <div className="col-span-1">
                      <p>{patient.date}</p>
                    </div>
                    <div className="col-span-1">
                      <p>{patient.time}</p>
                    </div>
                    <div className="col-span-1">
                      <p>{patient.name}</p>
                    </div>
                    <div className="col-span-1">
                      <p>{patient.age}</p>
                    </div>
                    <div className="col-span-1">
                      <p>{patient.reason}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Sidebar>
  );
};

export default Appointment;