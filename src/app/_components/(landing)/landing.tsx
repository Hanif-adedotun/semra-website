"use client";

import Header from "./header";
import Timing from "./timing";
import Media from "./media";
import Services from "./services";
import Donation from "./donation";

export default function LandingPage() {
  return (
    <main
      className="w-screen  overflow-hidden"
    >
      <Header />
      <Timing />
      <Media/>
      <Donation/>
      <Services/>
    </main>
  );
}
