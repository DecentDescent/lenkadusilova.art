import Head from "../components/Head";
import Header from "../components/Header";
import PageConcerts from "../components/Concerts";

import "../styles/global.scss";

const Index = () => {
  return (
    <main>
      <Head title="Koncerty" />
      <Header />
      <PageConcerts />
    </main>
  );
};

export default Index;
