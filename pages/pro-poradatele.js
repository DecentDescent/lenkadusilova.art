import HeadComponent from "../components/Head";
import Header from "../components/Header";
import PageOrganizers from "../components/Organizers";

import "../styles/global.scss";

const Index = () => {
  return (
    <>
      <HeadComponent title="Pro pořadatele" />
      <Header title="Pro pořadatele" />
      <PageOrganizers />
    </>
  );
};

export default Index;
