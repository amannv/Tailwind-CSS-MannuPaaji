import { useTheme } from "next-themes";
import image from "../assets/download.jpeg";

const Home = () => {
  
  const {theme, setTheme} = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="flex flex-col items-center justify-items-start relative z-10 h-130 w-90 border border-neutral-50 dark:border-neutral-800 rounded-xl bg-neutral-100 dark:bg-neutral-900 shadow-2xl">
      <div className="h-50 w-80 m-4 mb-0">
        <img className="rounded-md" src={image}></img>
      </div>
      <div className="p-6 pt-0 font-roboto flex flex-col justify-center items-end">
        <h2 className="mb-4 text-lg font-bold">
          The Hashira: Sentinels of the Demon Slayer Corps
        </h2>
        <p className="text-md">
          The Hashira are the nine most elite swordsmen in the Demon Slayer
          Corps. Each is a master of a unique Breathing Style, serving as the
          ultimate defense against Muzan Kibutsuji and his most powerful demons.
        </p>
        <button
          onClick={handleThemeChange}
          className="px-8 py-2 mt-3 bg-black dark:bg-white dark:text-black text-white rounded-full cursor-pointer"
        >
          Switch
        </button>
      </div>
    </div>
  );
};

export default Home;
