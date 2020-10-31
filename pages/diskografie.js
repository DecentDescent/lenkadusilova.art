import HeadComponent from "../components/Head";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import PageDiscography from "../components/Discography";
import "../styles/global.scss";

const Index = () => {
  return (
    <main>
      <Preloader />
      <HeadComponent title="Diskografie" />
      <Header title="Diskografie" />
      <PageDiscography />
    </main>
  );
};

export default Index;
