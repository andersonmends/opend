import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const NFTID = "rrkah-fqaaa-aaaaa-aaaaq-cai";
  return (
    <div className="App">
      <Header />
      {/* <Item id={NFTID} /> */}
      <Footer />
    </div>
  );
}

export default App;
