import "./App.css";
import CardList from "./components/CardList";

import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <CardList />
      <Counter />

      {/* <Main /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
