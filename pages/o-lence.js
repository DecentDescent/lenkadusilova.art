import HeadComponent from "../components/Head";
import Header from "../components/Header";
import PageAbout from "../components/About";

import "../styles/global.scss";

const Index = () => {
  return (
    <>
      <HeadComponent title="O Lence" />
      <Header title="O Lence" />
      <PageAbout />
    </>
  );
};

export default Index;
