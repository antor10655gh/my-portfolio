import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import Layout from "./components/shared/Layout";

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
