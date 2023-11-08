'use client';


import Head from "next/head";
import Image from "next/image";
import { Images } from "next/image";
import Sidebar from '@@/components/Sidebar';
import Container from "@@/components/Container";
import { useRouter } from "next/router";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { useState } from "react";
import Underline from '@@/components/Underline';
import Header from '@@/components/Header';

const dataPatient = {
  labels: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
  datasets: [
    {
      label: `Patients`,
      backgroundColor: `#36A2EB`,
      borderColor: `#36A2EB`,
      borderWidth: 1,
      hoverBackgroundColor: `#36A2EB`,
      hoverBorderColor: `#36A2EB`,
      data: [65, 100, 230, 344, 233, 13, 233, 45, 35, 103, 345, 345],
    },
  ],
};

const dataGender = {
  // labels: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
  labels: [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`],

  datasets: [
    {
      label: `Male`,
      data: [33, 29, 99, 193, 34, 8, 100, 45, 20, 100, 142, 135],
      borderColor: `#39E02B`,
      borderWidth: 2,
      lineTension: 0.5,
      fill: false,
    },
    {
      label: `Female`,
      data: [32, 71, 131, 151, 199, 5, 133, 0, 15, 3, 103, 210],
      borderColor: `#E04B2B`,
      borderWidth: 2,
      lineTension: 0.5,
      fill: false,
    }
  ]
}

const dataIncome = {
  // labels: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
  labels: [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`],
  datasets: [
    {
      label: `Income`,
      data: [1504, 1200, 1787, 1234, 541, 2455, 5464, 789, 457, 132, 457, 888],
      borderColor: `#E39FF6`,
      fill: true,
      backgroundColor: `#A45EE5`,
    }
  ]
}

const dataAgeRange = {
  labels: [`Age 0-12`, `Age 13-25`, `Age 26-45`, `Age > 45`],
  datasets: [
    {
      data: [13, 24, 38, 25],
      backgroundColor: [`#39E02B`, `#E04B2B`, `#36A2EB`, `#A45EE5`]
    }
  ]
}

const dataAppointment = {
  labels: [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`],
  datasets: [
    {
      label: `Hour`,
      data: [5, 7, 10, 6, 5, 7, 5, 9, 12, 8, 4, 6],
      fill: false,
      borderColor: `#FFFFFF`,
    }
  ]
}

const Component = () => {
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
          {/* {[`DC`].includes(user.type) && ( */}
            <>
              <div className="w-full p-4">
                <div className="grid grid-cols-6 gap-5">
                  <div className="flex justify-center items-center col-span-3 border rounded-3xl bg-chart-lightblue">
                    <Bar
                      data={dataPatient}
                      options={{
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                beginAtZero: true,
                              },
                            },
                          ],
                        },
                        plugins: {
                          title: {
                            display: true,
                            text: `Total Patient`,
                            align: `start`,
                            font: {
                              size: 28,
                              weight: `bold`,
                            },
                          },
                          subtitle: {
                            display: true,
                            text: `2091`,
                            color: `black`,
                            align: `start`,
                            font: {
                              size: 24,
                              family: `tahoma`,
                              weight: `bold`,
                            },
                          },
                        },
                      }}
                      className="m-4"
                    />
                  </div>
                  <div className="flex justify-center items-center col-span-3 border rounded-3xl bg-chart-red">
                    <Line
                      data={dataIncome}
                      options={{
                        responsive: true,
                        plugins: {
                          title: {
                            display: true,
                            text: `Total Income`,
                            align: `start`,
                            font: {
                              size: 28,
                              weight: `bold`,
                            },
                          },
                          subtitle: {
                            display: true,
                            text: `RM15,000`,
                            color: `black`,
                            align: `start`,
                            font: {
                              size: 24,
                              family: `tahoma`,
                              weight: `bold`,
                            },
                          }
                        }
                      }}
                      className="m-4"
                    />
                  </div>
                  <div className="flex justify-center items-center col-span-2 border rounded-3xl bg-chart-darkblue">
                    <Line
                      data={dataAppointment}
                      options={{
                        responsive: true,
                        plugins: {
                          title: {
                            display: true,
                            text: `Appointment`,
                            color: `white`,
                            align: `start`,
                            font: {
                              size: 28,
                              weight: `bold`,
                            },
                          },
                          subtitle: {
                            display: true,
                            text: `24 / Days`,
                            color: `white`,
                            align: `start`,
                            font: {
                              size: 24,
                              family: `tahoma`,
                              weight: `bold`,
                            },
                          },
                        },
                      }}
                      className="p-2"
                    />
                  </div>
                  <div className="flex justify-center items-center col-span-2 border rounded-3xl bg-chart-orange">
                    <Doughnut
                      data={dataAgeRange}
                      options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            position: 'bottom',
                          },
                          title: {
                            display: true,
                            text: 'Age',
                            font: {
                              size: 28,
                              family: `tahoma`,
                              weight: `bold`
                            }
                          }
                        }
                      }}
                      className="p-2"
                    />
                  </div>
                  <div className="flex justify-center items-center col-span-2 border rounded-3xl">
                    <Line
                      data={dataGender}
                      options={{
                        responsive: true,
                        plugins: {
                          title: {
                            display: true,
                            text: 'Gender',
                            align: `start`,
                            font: {
                              size: 28,
                              family: `tahoma`,
                              weight: `bold`
                            }
                          }
                        }
                      }}
                      className="p-2"
                    />
                  </div>
                </div>
              </div>
            </>
          {/* )} */}
        </main>
      </Container>
    </Sidebar>  
  );
};

export default Component;

