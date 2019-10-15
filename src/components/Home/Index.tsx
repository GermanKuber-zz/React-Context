import React from "react";
import HomeSpeakers from "./HomeSpeakers";
import HomeOrganizers from "./HomeOrganizers/Index";
import NextEvent from "./NextEvent/Index";
import HomeSponsors from "./HomeSponsors/Index";

type LoginProps = {};
export const Home: React.SFC<LoginProps> = () => {
  return (
    <>
      <h1>Home</h1>
      <NextEvent></NextEvent>
      <HomeSponsors></HomeSponsors>
      <HomeSpeakers></HomeSpeakers>
      <HomeOrganizers></HomeOrganizers>
    </>
  );
};

export default Home;
