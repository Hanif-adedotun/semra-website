import Image from "next/image";
import Nav from "../nav";
import Header from "./header";
import Timing from "./timing";

export default function LandingPage() {
  return (
     // bg-[url('/bg-pattern-2.jpg')]
    <main className="w-screen bg-auto bg-repeat bg-center bg-left-top ">
      <Nav />
      <Header />
      <Timing/>
    </main>
  );
}
