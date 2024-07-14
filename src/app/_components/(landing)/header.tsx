import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Card className="w-[85%] bg-semraGreen min-h-96 mx-auto shadow-sm rounded-lg flex flex-col-reverse justify-between gap-2 md:flex-row">
      <CardContent className="flex flex-col justify-center gap-2 md:gap-4">
        <h1 className="text-[30px] md:text-[60px] text-center md:text-left font-bold text-white">
          Assalamu Alaykum Wa Rahmattullahi Wa Baraka'atuh
        </h1>
        <Link href={"/about"}>
          <Button className="bg-semraYellow rounded-md text-white w-full md:w-1/2 mt-8 text-base py-6 px-8 hover:bg-semraYellow/90">
            Join our Community
          </Button>
        </Link>
      </CardContent>
      <CardContent className="w-full md:w-2/3 h-[250px] md:h-[500px]  md:mr-[50px] relative">
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
