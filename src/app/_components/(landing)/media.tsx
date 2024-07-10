// import { Card, CardContent } from "@/components/ui/card";
// import Video from "next-video";
// import mosqueDemo from "../../../../videos/mosqueVideo.mp4";

// export default function Media(){
//      return (
//        <Card className="bg-[#E6F8EF] min-h-96 w-[85%] mx-auto mt-48 relative">
//          <CardContent className="w-[50%] h-[50%] absolute -top-24 rounded-md">
//            <Video className="w-full " src={mosqueDemo} autoPlay loop />
//          </CardContent>
//        </Card>
//      );
// }

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

const images = [
  "/pictures/mosque1.jpeg",
  "/pictures/mosque2.jpeg",
  "/pictures/mosque3.jpeg",
];
export default function Media() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <Card className="bg-[#E6F8EF] min-h-96 w-[85%] mx-auto mt-[272px] relative flex justify-between">
      <Carousel
        plugins={[plugin.current]}
        className="w-full md:w-1/2 h-96 absolute left-0 md:left-12 -top-48 rounded-md"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="w-full h-96 relative rounded-md">
                  <Image
                    src={image}
                    className="object-cover w-full h-full rounded-md"
                    alt={"Image " + index}
                    fill
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      <div className="basis-0 md:basis-2/3"></div>{" "}
      {/*//TODO: DO not remove this*/}
      <CardContent className="flex flex-col justify-center gap-2 md:gap-4 mt-[240px] md:mt-0">
        <h3 className="font-semibold text-3xl">
          Meet our state of the art Islamic Center
        </h3>
        <ul className="text-base">
          <li className="flex gap-2 my-4 items-center font-medium">
            <CircleCheckBig size={24} color="#FD9822" /> Serene environment
          </li>
          <li className="flex gap-2 my-4 items-center font-medium">
            <CircleCheckBig size={24} color="#FD9822" /> Secure premises
          </li>
          <li className="flex gap-2 my-4 items-center font-medium">
            <CircleCheckBig size={24} color="#FD9822" /> 24/7 security
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

{
  /* <div className="p-1">
  <Card>
    <CardContent className="flex aspect-square items-center justify-center p-6">
      <span className="text-4xl font-semibold">{index + 1}</span>
    </CardContent>
  </Card>
</div>;  */
}
