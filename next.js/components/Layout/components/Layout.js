import React from "react";
import Header from "../components/Header/Header";
import TopBar from "../components/TopBar/TopBar";
import InstagramFeed from "../components/instagramFeed/InstgramFeed"
import Footer from "../components/Footer/Footer";


export default function Layout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />

      <a href="#" id="back-to-top" title="Back to top" style={{display: "none"}}>
        &uarr;
      </a>
    </>
  );
}
