const cn = (...classes: string[]) => classes.join(" ");
import pfp from "../public/spiderman.avif"


const Component = () => {
  return (
    <div
      className={cn(
        "min-h-100 w-full rounded-2xl bg-neutral-100 dark:bg-neutral-800",
        "bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
        "dark:bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]",
        "bg-size-[10px_10px]",
        "flex flex-col items-center justify-center p-8 pb-15","perspective-distant transform-3d",
        "group"
      )}
    >
      <h2 className={cn("text-2xl font-bold mt-8 mb-2 tracking-tight", "text-neutral-800 dark:text-neutral-100 dark:text-shadow-neutral-800 text-shadow-sm text-shadow-neutral-600")}>With great power comes great responsibility.</h2>
      <p className="max-w-sm mx-auto text-center mb-8 bg-clip-text text-transparent bg-linear-to-r from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-600">A friendly neighborhood hero who balances ordinary life with extraordinary courage—fighting villains, saving lives, and proving that true strength lies in doing what’s right, even when it’s hard.</p>
      <div
        className={cn(
          "size-60 rounded-2xl dark:bg-neutral-800 dark:border-neutral-600 border border-neutral-200 bg-neutral-100 group-hover:bg-neutral-200 transition-all duration-200 group-hover:border-neutral-300",
          "bg-[radial-gradient(var(--color-neutral-300)_1px,transparent_1px)]",
          "dark:bg-[radial-gradient(var(--color-neutral-600)_1px,transparent_1px)]",
          "relative bg-size-[10px_10px] shadow-2xl",
          "group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 dark:group-hover:border-neutral-600"
        )}
      >
        <img
          src={pfp}
          className={cn("h-full w-full object-cover rounded-2xl","transform rotate-x-30 rotate-z-30 -rotate-y-30 translate-z-20", "group-hover:scale-85 group-hover:rotate-x-0 group-hover:rotate-z-0 group-hover:rotate-y-0", "transition-transform duration-300 ease-[cubic-beziar(4,0,.2,1)]" )}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Component;
