import ModeToggle from "../components/mode-toggle";
import Grid from "../components/Grid";
const Page = () => {
  return (
    <div className="relative bg-white dark:bg-neutral-900 min-h-screen w-full">
      <Grid />
      <ModeToggle />
    </div>
  );
};

export default Page;
