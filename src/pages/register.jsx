'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Head from 'next/head';
import RadioGroup from '@@/components/RadioGroup';
import Image from 'next/image';
import { Images } from '@@/assets';

const RegisterPage = () => {
  const router = useRouter();

  const [name, setName] = useState(`Yong Zong Huang`);
  const [nric, setNric] = useState(`19382828311`);
  const [dateOfBirth, setDateOfBirth] = useState(`2001-03-19`);
  const [gender, setGender] = useState(`0`);
  const [mobileNo, setMobileNo] = useState(`123456789`);
  const [email, setEmail] = useState(`mail@mail.com`);
  const [unitNo, setUnitNo] = useState(`no.1`);
  const [buildingName, setBuildingName] = useState(`Building A`);
  const [street, setStreet] = useState(`Street B`);
  const [postalCode, setPostalCode] = useState(`50100`);
  const [bankAccountHolderName, setBankAccountHolderName] = useState(`Yong Zong Huang`);
  const [bankAccountNumber, setBankAccountNumber] = useState(`2382832938`);
  const [otp, setOtp] = useState(``);
  const [isShowOtp, setIsShowOtp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const maxLength = 6;
    if(otp.length !== maxLength) {
      return toast.error(`Only 6 OTP number is allowed`);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Infinitium Register</title>
      </Head>
      <div className="p-10 rounded-lg shadow-xl">
        <Image
          alt={`Back`}
          src={Images.arrow_left}
          className={`w-8 mb-4`}
          onClick={() => {
            router.back();
          }}
        />
        <h2 className="flex items-center justify-center text-xl font-bold mb-4">Infinitum | Sign Up Page</h2>
        <form>
          <div className="grid grid-rows-6 grid-cols-2 gap-2">
            <div>
              <label className="block font-bold mb-2">Name</label>
              <input
                className="border rounded px-3 py-2"
                type="text"
                id="name"
                value={name}
                placeholder="Enter Name"
                onChange={(e) => {
                  return setName(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2">NRIC</label>
              <input
                className="border rounded px-3 py-2"
                type="text"
                id="nric"
                value={nric}
                placeholder="Enter IC Number"
                onChange={(e) => {
                  return setNric(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Date of Birth</label>
              <input
                className="border rounded px-3 py-2"
                type="date"
                id="dob"
                value={dateOfBirth}
                placeholder="Enter Date of Birth"
                onChange={(e) => {
                  return setDateOfBirth(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Gender</label>
              <div className="border rounded px-3 py-2 w-full">
                <input
                  className=""
                  type="radio"
                  id="gender-male"
                  name="gender"
                  value="0"
                  onChange={(e) => {
                    return setGender(e.target.value);
                  }}
                  defaultChecked
                  required
                />
                <label className="px-3">Male</label>
                <input
                  className=""
                  type="radio"
                  id="gender-female"
                  name="gender"
                  value="1"
                  onChange={(e) => {
                    return setGender(e.target.value);
                  }}
                  required
                />
                <label className="px-3">Female</label>
              </div>
            </div>
            <div>
              <label className="block font-bold mb-2">Mobile No</label>
              <input
                className="border rounded px-3 py-2"
                type="number"
                id="mobileNo"
                value={mobileNo}
                placeholder="Enter Mobile No"
                onChange={(e) => {
                  return setMobileNo(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Email</label>
              <input
                className="border rounded px-3 py-2"
                type="text"
                id="email"
                value={email}
                placeholder="Enter Email"
                onChange={(e) => {
                  return setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Unit Number</label>
              <input
                className="border rounded px-3 py-2"
                type="text"
                id="unitNo"
                value={unitNo}
                placeholder="Enter Unit Number"
                onChange={(e) => {
                  return setUnitNo(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Building Name</label>
              <input
                className="border rounded px-3 py-2"
                type="text"
                id="buildingName"
                value={buildingName}
                placeholder="Enter Building Name"
                onChange={(e) => {
                  return setBuildingName(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Street</label>
              <input
                className="border rounded px-3 py-2"
                type="street"
                id="street"
                value={street}
                placeholder="Enter Street"
                onChange={(e) => {
                  return setStreet(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Postal Code</label>
              <input
                className="border rounded px-3 py-2"
                type="number"
                id="postalCode"
                value={postalCode}
                placeholder="Enter Postal Code"
                onChange={(e) => {
                  return setPostalCode(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Bank Account Name</label>
              <input
                className="border rounded px-3 py-2"
                type="text"
                id="bankAccountName"
                value={bankAccountHolderName}
                placeholder="Enter Bank Account Name"
                onChange={(e) => {
                  return setBankAccountHolderName(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-2">Bank Account Number</label>
              <input
                className="border rounded px-3 py-2"
                type="number"
                id="bankAccountNumber"
                value={bankAccountNumber}
                placeholder="Enter Bank Account Number"
                onChange={(e) => {
                  return setBankAccountNumber(e.target.value);
                }}
                required
              />
            </div>
          </div>
          {/* <div className="mt-4 grid grid-col-2">
            <input
                className="border rounded px-3 py-2"
                id="otp"
                value={otp}
                placeholder="Enter OTP"
                onChange={(e) => {
                  return setOtp(e.target.value.replace(/\D/g, ``).slice(0, 6));
                }}
                required
              />
            {!isShowOtp && (
              <button
                className="flex justify-center items-center border rounded text-white bg-blue-500 px-4 py-2 mt-2"
                onClick={() => {
                  setIsShowOtp((prev) => {
                    return !prev;
                  });
                }}
                type="button"
              >
                Generate OTP
              </button>
            )}
            
          </div> */}
          <div className="flex justify-center items-center border rounded-full px-4 py-2 mt-4 font-bold text-lg">
            <button>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;