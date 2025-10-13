import Home from "./components/Home";
import { Route,  Routes ,BrowserRouter} from "react-router-dom";
import Workouts from "./components/Workouts";
import Programs from "./components/Programs";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/muscle-mentor-client">
      <Header />
        <Routes>
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
