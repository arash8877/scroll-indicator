import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import ScrollIndicator from "./components/ScrollIndicator";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollIndicator />
      <Content />
    </div>
  );
}


export default App;