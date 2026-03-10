import { ThemeProvider } from "next-themes";
import "./index.css";
import Home from "./pages/page";

const App = () => {
  return <div>
    <ThemeProvider>
    <Home /> 
    </ThemeProvider>
  </div>;
};

export default App;
