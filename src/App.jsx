import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

const App = () => {
  
  return (
    <div className="h-full w-full flex gap-3 p-1">
      <Navbar/>
      <MainPage/>
    </div>
  );
}

export default App