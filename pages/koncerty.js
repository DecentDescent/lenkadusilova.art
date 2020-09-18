import HeadComponent from "../components/Head";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import PageConcerts from "../components/Concerts";

import "../styles/global.scss";

const Index = () => {
  return (
    <>
      {/* <Preloader /> */}
      <HeadComponent />
      <Header title="Koncerty" />
      <PageConcerts />
    </>
  );
};

export default Index;
