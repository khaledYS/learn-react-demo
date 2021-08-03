import Nav from "./component/Nav";
import Home from './component/Home';
import './component/index.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
export default App;
