"use client"
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export const BackButton = () => {
const router = useRouter();
return (
  <ArrowLeft
    className="h-5 w-5 mb-6 md:mb-0 cursor-pointer hover:scale-150 transition duration-300"
    onClick={() => router.push("/events")}
  />
);
}