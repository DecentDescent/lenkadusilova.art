import HeadComponent from "../components/Head";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import PageContact from "../components/Contact";

import "../styles/global.scss";

const Index = () => {
  return (
    <main>
      {/* <Preloader /> */}
      <HeadComponent />
      <Header title="Kontakt" />
      <PageContact />
    </main>
  );
};

export default Index;
