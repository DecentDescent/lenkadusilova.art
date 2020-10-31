import HeadComponent from "../components/Head";
import Header from "../components/Header";
import PageContact from "../components/Contact";

import "../styles/global.scss";

const Index = () => {
  return (
    <>
      <HeadComponent title="Kontakt" />
      <Header title="Kontakt" />
      <PageContact />
    </>
  );
};

export default Index;
