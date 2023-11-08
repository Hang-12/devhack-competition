'use client';

import React, { useState } from 'react';
import Sidebar from '@@/components/Sidebar';
import Container from '@@/components/Container';
import Header from '@@/components/Header';
import Head from 'next/head';
import Image from 'next/image';
import { Images } from '@@/assets'
import { useRouter } from 'next/router';

const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const router = useRouter();

  return (
    <Sidebar>
      <Container>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="Infinitum HealthCare"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <main className="min-h-screen">
          <Header />
          <>
            <div className="w-full p-4">
              <div className="grid grid-cols-3 gap-5">
                <div className="flex justify-center items-center col-span-3 border rounded-3xl">
                  <div className="grid grid-rows-2">
                    <div className="flex row-span-1 text-2xl font-bold">
                      <p>Need Find a Doctor? Make Appointment Now!</p>
                    </div>
                    <div className="row-span-1 flex items-center justify-center mt-4">
                      <button
                        className="border rounded-xl px-4 py-2 bg-cyan-300 text-white text-xl"
                        type="button"
                        onClick={() => {
                          router.push({
                            pathname: `/book-appointment`,
                          });
                        }}
                      >
                        <span>Get Appointment</span>
                      </button>
                    </div>
                  </div>
                  <div className="row-span-2 mb-2">
                    <Image
                      alt={`Doctor Team`}
                      src={Images.doctor_team}
                      className={`w-3/4 m-5 pl-10`}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center border rounded-3xl col-span-1">
                  <div className="grid grid-rows-3">
                    <div className="flex text-2xl font-bold row-span-1 items-center justify-center">
                      <p>View Heart</p>
                    </div>
                    <div className="flex items-center justify-center row-span-1 text-lg font-semibold">
                      <p>Press the heart to know info</p>
                    </div>
                    <div className="flex items-center justify-center row-span-1 mb-3">
                      <Image
                        alt="Heart"
                        src={Images.heart_gif}
                        className={`border rounded-full w-20 aspect-square inline-block cursor-pointer`}
                        onClick={() => {
                          router.push({
                            pathname: `/health-status`,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center border rounded-3xl col-span-2">
                  <div className="grid grid-rows-2">
                    <div className="flex text-2xl font-bold row-span-1 items-center justify-center">
                      <p>Upcoming Appointment</p>
                    </div>
                    <p className="flex justify-center text-3xl font-bold">In Progress...</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        </main>
      </Container>
    </Sidebar>
  )
}

export default Dashboard;
