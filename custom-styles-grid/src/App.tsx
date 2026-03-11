import "./index.css";
import Page from "./pages/page";
import { ThemeProvider } from "next-themes";

const App = () => {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Page />
      </ThemeProvider>
    </div>
  );
};

export default App;
