'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Container from '@@/components/Container';
// import Sidebar from '@@/components/Sidebar';
import { useRouter } from 'next/router';

const Component = () => {
  const [patientID, setPatientID] = useState(``);
  const [patients, setPatients] = useState([]);
  
  const router = useRouter();

  return (
    // <Sidebar>
      <Container>
        <div className="pl-4">
          <p className="text-2xl font-bold mb-5">Patient List</p>
          <ul className="divide-y">
            <li className="py-4 grid grid-cols-3">
              <div className="col-span-1">
                <p className="text-ml font-bold">{`Name`}</p>
              </div>
              <div className="col-span-1">
                <p className="text-ml font-bold">{`Status`}</p>
              </div>
              <div className="col-span-1">
                <p className="text-ml font-bold">{`Action`}</p>
              </div>
            </li>
            {patients.map((patient) => {
              return (
                <li key={patient.id} className="py-4 grid grid-cols-3">
                  <div className="col-span-1">
                    <p>{patient.name}</p>
                  </div>
                  <div className="col-span-1">
                    {patient.status === `EM` && (
                      <span>
                        Emergency
                      </span>
                    )}
                    {patient.status === `BC` && (
                      <span>
                        Body Check Up
                      </span>
                    )}                  
                    {patient.status === `RE` && (
                      <span>
                        Regular
                      </span>
                    )}
                  </div>
                  <div className="col-span-1">
                    {patient.action === `DN` && (
                      <span>
                        Done
                      </span>
                    )}
                    {patient.action === `PG` && (
                      <span>
                        In Progress
                      </span>
                    )}                  
                    {patient.action === `PD` && (
                      <span>
                        Pending
                      </span>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    // </Sidebar>
  );
};

export default Component;