

const NavBar = () => {
  return (
    <div className="flex rounded-full border border-neutral-200 justify-between items-center mt-4 max-w-4xl mx-auto bg-white p-8 shadow-aceternity px-2 py-2">
        <img
        src="https://ui.aceternity.com/logo.png"
        alt="logo"
        height={32}
        width={32}
        className="rounded-full"
        />
        <div className="flex items-center gap-4 text-sm text-neutral-500 mr-10 hover:text-neutral-900">
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default NavBar
