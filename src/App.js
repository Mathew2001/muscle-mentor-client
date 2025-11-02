import Home from "./components/Home";
import { Route,  Routes ,BrowserRouter, HashRouter} from "react-router-dom";
import Workouts from "./components/Workouts";
import Programs from "./components/Programs";
import About from "./components/About";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import AppImage from "./assets/images/AppImage.jpg";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AccessibilityStatement from "./components/AccessibilityStatement";
import AccessibilityButton from "./components/AccessibilityButton";
function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${AppImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <HashRouter>
      <Header />
      <div className="container py-2">
        <Routes>
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
        </Routes>
        </div>
        <Footer />
        <AccessibilityButton />
      </HashRouter>
    </div>
  );
}

export default App;
