'use client';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';

import Head from "next/head";
import Image from "next/image";
import { Images } from "next/image";
import Sidebar from '@@/components/Sidebar';
import Container from "@@/components/Container";
import { useRouter } from "next/router";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
);

const dataVerticalBar = {
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

const dataDoughnut = {
  labels: [`Flu`, `Diabetes`, `Pneumonia`],
  datasets: [
    {
      data: [40, 30, 30],
      backgroundColor: [`#36A2EB`, `#E04B2B`, `#39E02B`],
    }
  ]
}

const dataPie = {
  labels: [`Neurology`, `Cardiology`, `Dermatology`],
  datasets: [
    {
      data: [30, 50, 20],
      backgroundColor: [`#36A2EB`, `#E04B2B`, `#39E02B`],
    }
  ]
}

const dataLine = {
  labels: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
  datasets: [
    {
      label: `Male`,
      data: [33, 29, 99, 193, 34, 8, 100, 45, 20, 100, 142, 135],
      borderColor: `#E04B2B`,
      borderWidth: 2,
      lineTension: 0.5,
      fill: false,
    },
    {
      label: `Female`,
      data: [32, 71, 131, 151, 199, 5, 133, 0, 15, 3, 103, 210],
      borderColor: `#39E02B`,
      borderWidth: 2,
      lineTension: 0.5,
      fill: false,
    }
  ]
}

const dataVerticalBar1 = {
  labels: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
  datasets: [
    {
      label: `Male`,
      data: [33, 29, 99, 193, 34, 8, 100, 45, 20, 100, 142, 135],
      backgroundColor: `#E04B2B`
    },
    {
      label: `Female`,
      data: [32, 71, 131, 151, 199, 5, 133, 0, 15, 3, 103, 210],
      backgroundColor: `#39E02B`
    }
  ]
}

const Component = () => {
  return (
    <Sidebar>
      <Container>
        <main>
          <div className="w-full pl-4">
            <h2 className="font-bold text-xl">Patient</h2>
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center col-span-1">
                <Bar
                  data={dataVerticalBar}
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
                  }}
                />
              </div>
              <div className="col-span-1">
                <Doughnut
                  data={dataDoughnut}
                  options={{
                    responsive: true,
                  }}
                />
              </div>
              <div>
                <Pie
                  data={dataPie}
                  options={{
                    responsive: true,
                  }}
                />
              </div>
              <div className="flex justify-center items-center col-span-1">
                <Line
                  data={dataLine}
                  options={{
                    responsive: true,
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                  }}
                />
              </div>
              <div>
                <Bar
                  data={dataVerticalBar1}
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
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      </Container>
    </Sidebar>  
  );
};

export default Component;

