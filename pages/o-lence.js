import HeadComponent from "../components/Head";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import PageAbout from "../components/About";

import "../styles/global.scss";

const Index = () => {
  return (
    <>
      {/* <Preloader /> */}
      <HeadComponent title="O Lence" />
      <Header title="O Lence" />
      <PageAbout />
    </>
  );
};

export default Index;
