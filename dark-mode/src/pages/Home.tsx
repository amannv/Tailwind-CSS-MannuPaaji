import image from "../assets/download.jpeg"

const Home = () => {
  return (
      <div className="flex flex-col items-center justify-items-start relative z-10 h-120 w-90 border border-neutral-100 rounded-xl bg-neutral-50 shadow-2xl">
        <div className="h-50 w-80 m-4 mb-0"><img className="rounded-md" src={image}></img></div>
        <div className="p-4 pt-0 font-roboto">
        <h2 className="mb-4 text-lg font-bold">The Hashira: Sentinels of the Demon Slayer Corps</h2>
        <p className="text-md">The Hashira are the nine most elite swordsmen in the Demon Slayer Corps. Each is a master of a unique Breathing Style, serving as the ultimate defense against Muzan Kibutsuji and his most powerful demons.</p>
        </div>
      </div>
  )
}

export default Home
