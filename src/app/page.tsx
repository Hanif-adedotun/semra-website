import { Metadata } from "next";
import LandingPage from "./_components/(landing)/landing";

export const metadata: Metadata = {
  title: "Home Page",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 bg-white">
     <LandingPage/>
    </main>
  );
}
