"use client";

import Nav from "../nav";
import Header from "./header";
import Timing from "./timing";
import { Footer } from "./footer";
import Media from "./pictures";
import Services from "./services";

export default function LandingPage() {
  return (
    <main
      className="w-screen  overflow-hidden"
    >
      <Nav />
      <Header />
      <Timing />
      <Media/>
      <Services/>
      <Footer />
    </main>
  );
}
