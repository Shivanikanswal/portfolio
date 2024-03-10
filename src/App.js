import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ReactDOM from "react-dom/client";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const appRoot = ReactDOM.createRoot(document.getElementById("root"));

appRoot.render(<AppLayout />);
