"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const defaultPrices = [
  { name: "N2,000", value: 2000 },
  { name: "N20,000", value: 20000 },
  { name: "N50,000", value: 50000 },
  { name: "N100,000", value: 100000 },
  { name: "N200,000", value: 200000 },
];

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export default function Donation() {
     const form = useForm<z.infer<typeof formSchema>>({
       resolver: zodResolver(formSchema),
       defaultValues: {
         username: "",
       },
     });

     function onSubmit(values: z.infer<typeof formSchema>) {
       // Do something with the form values.
       // ✅ This will be type-safe and validated.
       console.log(values);
     }
  return (
    <Card className="mt-[80px] w-[85%] p-20 bg-fadedGreen min-h-96 mx-auto shadow-sm rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 justify-items-start">
      <CardContent className="flex flex-col text-white justify-start pt-8 gap-2 sm:gap-4">
        <div className="w-full h-[300px] relative rounded-sm">
          <Image
            src="/pictures/donation.jpg"
            fill
            className="object-cover rounded-sm"
            alt=""
          />
        </div>
        <p className="text-base text-black mt-8">
          Suncity Estate Muslim Resident Association (SEMRA).Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur{" "}
        </p>
      </CardContent>

      <CardContent className="text-start w-full">
        <h1 className="text-2xl font-bold text-black">
          Pledge Montly Donation
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto my-8">
            <ToggleGroup size={"lg"} type="single" className="gap-4">
              {defaultPrices.map((price, index) => (
                <ToggleGroupItem
                  className="data-[state=on]:bg-semraYellow/80 bg-semraYellow/10 hover:bg-semraYellow/30 text-semraYellow data-[state=on]:text-white hover:text-semraYellow"
                  key={index}
                  value={price.value.toString()}
                >
                  {price.name}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
