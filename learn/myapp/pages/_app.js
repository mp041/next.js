import "../styles/globals.css";
// import Head from "next/head";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Link from 'next/link'
import Layout from '../../myapp/pages/Components/Layout';

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
  <Component {...pageProps} />
  </Layout>
)
}

export default MyApp;
