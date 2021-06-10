import "../styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import ProductContext from "../Components/Context/ProductContext";
function MyApp({ Component, pageProps }) {
  return (
    <ProductContext>
      <Component {...pageProps} />
    </ProductContext>
  );
}

export default MyApp;
