import Head from "../components/Head";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import PageConcerts from "../components/Concerts";

import "../styles/global.scss";

const Index = () => {
  return (
    <main>
      {/* <Preloader /> */}
      <Head />
      <Header />
      <PageConcerts />
    </main>
  );
};

export default Index;
