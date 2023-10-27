// class component
import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
// ABOUT PAGE
export default class About extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <p>Halaman About Us</p>
        <Footer />
      </div>
    );
  }
}
