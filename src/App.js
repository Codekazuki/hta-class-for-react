import "./App.css";

import Counter from "./components/Counter";
import FetchDataComponent from "./components/FetchDataComponent";

function App() {
  return (
    <div className='App'>
      <FetchDataComponent />
      <Counter />
    </div>
  );
}

export default App;
