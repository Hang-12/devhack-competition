'use client';

import Container from '@@/components/Container';
import React, { useState } from 'react';
import Image from 'next/image';
import { Images } from '@@/assets';

const Profile = () => {
  const [name, setName] = useState(`Yong Zong Huang`);
  const [dateOfBirth, setDateOfBirth] = useState(`19 March 2001`);
  const [nric, setNric] = useState(`223829-09-0238`);
  const [address, setAddress] = useState(`No 3, Taman Nasil, 40000 KL`);
  const [homeNo, setHomeNo] = useState(`03-12345655`);
  const [mobileNo, setMobileNo] = useState(`016-6464633`);
  const [email, setEmail] = useState(`abc@gmail.com`);

  const contact = () => {
    return (
      <div>
        <div>
          <div>
            <p>Patient Profile</p>
            <div>
              <div>
                <Image/>
                <div>
                  <label>
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => {
                      return setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <label>
                  Date of Birth
                </label>
                <input
                  id="dateOfBirth"
                  type="text"
                  placeholder="Enter Date of Birth"
                  value={dateOfBirth}
                  onChange={(e) => {
                    return setDateOfBirth(e.target.value);
                  }}
                />
              </div>

              <div>
                <label>
                  IC / Passport No.
                </label>
                <input
                  id="nric"
                  type="text"
                  placeholder="Enter IC"
                  value={nric}
                  onChange={(e) => {
                    return setNric(e.target.value);
                  }}
                />
              </div>
            </div>
            <p>CONTACT</p>
            <Image/>
            <div>
              <label>
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => {
                  return setAddress(e.target.value);
                }}
              />
            </div>
            <div>
              <label>
                Home
              </label>
              <input
                id="homeNo"
                type="text"
                placeholder="Enter Home Number"
                value={homeNo}
                onChange={(e) => {
                  return setHomeNo(e.target.value);
                }}
              />
            </div>
            <div>
              <label>
                Mobile
              </label>
              <input
                id="mobileNo"
                type="text"
                placeholder="Enter Mobile Number"
                value={mobileNo}
                onChange={(e) => {
                  return setMobileNo(e.target.value);
                }}
              />
            </div>
            <div>
              <label>
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  return setEmail(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
    
  const transactionHistory = () => {
    return (
      <div>
        <p>Transaction History</p>
        <div>
          <ul>
            <li>
              <div>
                <p>{`Date`}</p>
              </div>
              <div>
                <p>{`Account No`}</p>
              </div>
              <div>
                <p>{`Transaction Type`}</p>
              </div>
              <div>
                <p>{`Transaction No`}</p>
              </div>
              <div>
                <p>{`Value (MYR)`}</p>
              </div>
              <div>
                <p>{`Status`}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <input
        id="name"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
          return setName(e.target.value);
        }}
      />
      {contact()}
      {transactionHistory()}
    </Container>
  );
};

export default Profile;