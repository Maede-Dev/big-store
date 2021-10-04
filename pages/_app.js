import FooterCustom from "../Components/Footer";
import Header from "../Components/Header";
import "../styles/globals.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "45vh" }}>
        <Component {...pageProps} />
      </div>
      <FooterCustom />
    </>
  );
}

export default MyApp;
