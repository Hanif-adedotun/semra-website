import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Card className="w-[85%] bg-semraGreen min-h-96 mx-auto shadow-sm rounded-lg flex justify-between gap-2 sm:flex-row">
      <CardContent className="flex flex-col justify-center gap-2 sm:gap-4">
        <h1 className="text-[60px] font-bold text-white">
          Assalamu Alaykum Wa Rahmattullahi Wa Baraka'atuh
        </h1>
        <Link href={"/about"}>
          <Button className="bg-semraYellow rounded-md text-white">
            Join our Community
          </Button>
        </Link>
      </CardContent>
      <CardContent className="w-1/2 h-[500px]  mr-[50px] relative">
        <Image
          src="/icons/praying.svg"
          className="object-contain rounded-lg "
          fill
          alt="Praying Muslims"
        />
      </CardContent>
    </Card>
  );
}
