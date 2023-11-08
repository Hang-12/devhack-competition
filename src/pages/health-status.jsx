import React from "react";
import Head from "next/head";
import Sidebar from "@@/components/Sidebar";
import Container from "@@/components/Container";

const Health = () => {
  return (
    <Sidebar>
      <Container>
        <Head>
          <title>Health Status</title>
        </Head>
        <div className="flex items-center justify-center mt-10 text-3xl font-bold">
          <p>In Progress...</p>
        </div>
      </Container>
    </Sidebar>
      
  );
};

export default Health;