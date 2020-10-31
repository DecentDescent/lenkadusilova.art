import HeadComponent from "../components/Head";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Homepage from "../components/Homepage";

import "../styles/global.scss";

const Index = () => {
  return (
    <>
      <Preloader />
      <HeadComponent />
      <Header />
      <Homepage />
    </>
  );
};

export default Index;
