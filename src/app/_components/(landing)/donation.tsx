"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const defaultPrices = [
  { name: "N2,000", value: 2000 },
  { name: "N20,000", value: 20000 },
  { name: "N50,000", value: 50000 },
  { name: "N100,000", value: 100000 },
  { name: "N200,000", value: 200000 },
];

const formSchema = z.object({
  amount: z.number().int(),
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  phoneNumber: z.string().min(10).max(15),
  message: z.string().max(250),
  terms: z.boolean(),
});

export default function Donation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const onCopy = (text:any) =>{
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");

  }
  return (
    <Card id="donate" className="mt-[80px] w-[85%] p-1 md:p-20 bg-fadedGreen min-h-96 mx-auto shadow-sm rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 justify-items-start">
      <CardContent className="flex flex-col text-white justify-start pt-8 gap-2 md:gap-4">
        <div className="w-full h-[300px] relative rounded-sm">
          <Image
            src="/pictures/donation.jpg"
            fill
            className="object-cover rounded-sm"
            alt=""
          />
        </div>
        <div className="text-base text-black mt-8">
          <section className="border border-dashed border-1 border-semraYellow w-full p-4 rounded-md flex flex-col gap-2">
            <div className="text-center ">TAJ Bank</div>
            <div className="text-center">
              SUNCITY ESTATE MUSLIM RESIDENTS ASSOCIATION
            </div>
            <div className="flex gap-2 items-center justify-center">
              Account Number:{" "}
              <span className="text-semraYellow">0002923259</span>
              <Copy
                size={14}
                color="#FD9822"
                onClick={() => onCopy("0002923259")}
                className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>
          </section>

          <section className="border border-dashed border-1 mt-4 border-semraYellow w-full p-4 rounded-md flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center ">
              Meter No: <span className="text-semraYellow">45976978273</span>{" "}
              <Copy
                size={14}
                color="#FD9822"
                onClick={() => onCopy("45976978273")}
                className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
              />
            </div>
          </section>
        </div>
      </CardContent>

      <CardContent className="text-start w-full">
        <h1 className="text-3xl font-semibold text-black">
          Pledge Montly Donation
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto my-8">
            <ToggleGroup
              size={null}
              type="single"
              className="gap-4 justify-start flex-wrap lg:flex-nowrap"
            >
              {defaultPrices.map((price, index) => (
                <ToggleGroupItem
                  className="text-sm md:text-base data-[state=on]:bg-semraYellow/80 bg-semraYellow/10 hover:bg-semraYellow/30 text-semraYellow data-[state=on]:text-white hover:text-semraYellow"
                  key={index}
                  value={price.value.toString()}
                  onChange={(value) => form.setValue("amount", 43)}
                >
                  {price.name}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="flex gap-2 justify-center items-center my-8 text-base">
                  <FormLabel className="w-max text-nowrap">
                    Your pledge <span className="text-bold">₦</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter custom amount"
                      type="number"
                      {...field}
                      className="placeholder:opacity-10 rounded-[10px] outline:none border-0 bg-black/5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* FullName */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="my-8">
                  <FormLabel className="w-max text-small font-medium">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your full name"
                      {...field}
                      className="placeholder:opacity-10 rounded-[10px] outline:none border-0 bg-black/5"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* EMail and phone */}

            <div className="grid grid-cols-2 gap-4 my-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="w-max text-small font-medium">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        type="email"
                        {...field}
                        className="placeholder:opacity-10 rounded-[10px] outline:none border-0 bg-black/5"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="w-max text-small font-medium">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="0902 343 2445"
                        type="number"
                        {...field}
                        className="placeholder:opacity-10 rounded-[10px] outline:none border-0 bg-black/5"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="block">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Do you have any extra information to share?"
                      className="placeholder:opacity-10 rounded-[10px] resize-none outline:none border-0 bg-black/5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Terms */}
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="block flex flex-row items-start space-x-3 space-y-0 rounded-md w-full p-2 my-8">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      You agree to receive monthly reminders for your pledged
                      payment
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-semraYellow rounded-[10px] mx-auto text-white w-full h-12"
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
