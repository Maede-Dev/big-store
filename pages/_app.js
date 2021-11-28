import FooterCustom from "../Components/Footer";
import Header from "../Components/Header";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import MyStore from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={MyStore}>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
      <FooterCustom />
    </Provider>
  );
}

export default MyApp;
