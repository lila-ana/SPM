import React from "react";
import Layout from "../../Layout/Index";
import TextSection from "../../Components/Home/textSection";


const Home = () => {
  return (
    <div>
      <Layout paddings={"px-[0px]"}>
        <div className="px-[100px]">
          {/* <Projects /> */}
        </div>
        <TextSection/>
      </Layout>
    </div>
  );
};
export default Home;
