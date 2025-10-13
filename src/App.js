import Home from "./components/Home";
import { Route,  Routes ,BrowserRouter, HashRouter} from "react-router-dom";
import Workouts from "./components/Workouts";
import Programs from "./components/Programs";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Header />
        <Routes>
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
