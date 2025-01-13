import About from "./components/About";
import Demo from "./components/Demo";
import Intro from "./components/Intro";

export default function App() {
  return (
    <section className="relative">
   <img src="bg2.jpg" alt=""  className="absolute inset-0 h-full w-full -z-[999] opacity-25 object-cover object-center bg-repeat"/>
      <section className="max-w-[1440px] mx-auto ">
        <Intro />
        <About />
        <Demo />
      </section>
    </section>
  );
}
