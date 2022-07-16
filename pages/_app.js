import "../styles/globals.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
