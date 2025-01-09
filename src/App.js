import "./App.css";

import Counter from "./Counter";
import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Counter />

      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
