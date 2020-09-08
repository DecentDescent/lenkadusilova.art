import Head from "../components/Head";
import Header from "../components/Header";
import PageAbout from "../components/About";

import "../styles/global.scss";

const Index = () => {
  return (
    <main>
      <Head title="O Lence" />
      <Header />
      <PageAbout />
    </main>
  );
};

export default Index;
