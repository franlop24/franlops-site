import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";

export default function App() {
  return (
    <div>
      <h1 className="font-extrabold text-2xl">FranLop's Site</h1>
      <Home />
      <Contact />
      <About />
    </div>
  )
}
