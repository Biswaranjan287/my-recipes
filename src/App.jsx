import Mainroutes from "./routes/Mainroutes"
import Navbar from "./components/Navbar"


export const App = () => {
  
  return (
    <div className="py-10 px-[10%] bg-stone-950 text-amber-50 font-thin w-screen h-screen">

      <Navbar />
      <Mainroutes/>
    </div>
  )
}

export default App;