import React from "react";
import Head from "next/head";
import NavigationBar from "@@/components/NavigationBar";

const Doctor = () => {
  return (
    <>
      <Head>
        <title>Infinitum Doctor</title>
      </Head>
      <NavigationBar/>
      <p className="flex justify-center text-3xl font-bold">In Progress...</p>
    </>
  );
};

export default Doctor;