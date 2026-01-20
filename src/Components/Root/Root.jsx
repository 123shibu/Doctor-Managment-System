import React, { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet, useLoaderData } from "react-router";
import Footer from "../Footer/Footer";
import Section1 from "../Section1/Section1";
import Count from "../CountUp/Count";
import { HiH2 } from "react-icons/hi2";

const Root = () => {
  const dataLoad = useLoaderData();

  return (
    <div className="bg-[#efeded] p-4  max-w-6xl mx-auto">
      <Suspense fallback={<h2>Loading.....</h2>}>
        <Header></Header>
      </Suspense>
      <Section1 dataLoad={dataLoad}></Section1>
      <section>
        <Outlet></Outlet>
      </section>
      <Count></Count> <br />
      <Footer> </Footer>
    </div>
  );
};

export default Root;
