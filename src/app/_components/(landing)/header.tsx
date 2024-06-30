import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Header() {
  return (
    <Card className="mt-[80px] w-[85%] bg-semraGreen min-h-96 mx-auto shadow-sm rounded-lg grid grid-cols-1 gap-4 sm:gap-0 sm:grid-cols-2">
      <CardContent className="flex flex-col justify-center gap-2 sm:gap-4">
        <h1 className="text-[60px] font-bold text-white">Assalamu Alaykum Wa Rahmattullahi Wa Baraka'atuh</h1>
        <Link href={"/about"}>
          <Button className="bg-semraYellow rounded-md text-white">
            Join our Community
          </Button>
        </Link>
      </CardContent>
      <CardContent></CardContent>
    </Card>
  );
}
