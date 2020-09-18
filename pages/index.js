import HeadComponent from "../components/Head";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Homepage from "../components/Homepage";

import "../styles/global.scss";

const Index = () => {
  return (
    <main>
      {/* <Preloader /> */}
      <HeadComponent />
      <Header />
      <Homepage />
    </main>
  );
};

export default Index;
