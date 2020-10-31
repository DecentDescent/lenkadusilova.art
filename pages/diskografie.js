import HeadComponent from "../components/Head";
import Header from "../components/Header";
import PageDiscography from "../components/Discography";
import "../styles/global.scss";

const Index = () => {
  return (
    <>
      <HeadComponent title="Diskografie" />
      <Header title="Diskografie" />
      <PageDiscography />
    </>
  );
};

export default Index;
