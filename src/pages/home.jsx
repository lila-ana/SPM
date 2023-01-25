import React from "react";
import Layout from "../layout";
import Projects from "../Components/Home/Projects";
import AutoCounter from "../Components/Home/AutoCounter";
import Clients from "../Components/Home/Clients";
import Certifications from "../Components/Home/Certifications";
import Partners from "../Components/Home/Partners";

const Home = () => {
  return (
    <div>
      <Layout paddings={"px-[0px]"}>
        <div className="px-[100px]">
          {" "}
          <Projects />
        </div>
        <AutoCounter />
        <Partners />
        <Clients />
        <Certifications />
      </Layout>
    </div>
  );
};
export default Home;
