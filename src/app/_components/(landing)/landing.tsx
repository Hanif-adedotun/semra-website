"use client";

import Nav from "../nav";
import Header from "./header";
import Timing from "./timing";
import { Footer } from "./footer";
import Media from "./media";
import Services from "./services";
import Donation from "./donation";

export default function LandingPage() {
  return (
    <main
      className="w-screen  overflow-hidden"
    >
      <Nav />
      <Header />
      <Timing />
      <Media/>
      <Donation/>
      <Services/>
      <Footer />
    </main>
  );
}
