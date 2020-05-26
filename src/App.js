import React from "react";
import "./App.css";
import Top from "./Components/Top";
import SearchForm from "./Components/SearchForm";
import Footer from "./Components/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Top />
        <SearchForm />
        <Footer />
      </div>
    );
  }
}
export default App;
