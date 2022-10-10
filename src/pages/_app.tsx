import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" theme="dark" />
    </Container>
  );
}

export default MyApp;
