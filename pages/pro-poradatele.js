import HeadComponent from "../components/Head";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import PageOrganizers from "../components/Organizers";

import "../styles/global.scss";

const Index = () => {
  return (
    <>
      <Preloader />
      <HeadComponent title="Pro pořadatele" />
      <Header title="Pro pořadatele" />
      <PageOrganizers />
    </>
  );
};

export default Index;
