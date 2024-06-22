import { Card, CardContent } from "@/components/ui/card";

export default function Timing() {
  return (
    <>
      <div className="flex items-center justify-between ml-[10%] mt-[80px]">
        <h1 className="text-3xl font-bold text-primary">Prayer Times</h1>
      </div>
      <Card className="mt-4 w-[85%] h-96 mx-auto shadow-sm rounded-lg grid grid-flow-col">
        <CardContent>Left</CardContent>
        <CardContent>Right</CardContent>
      </Card>
    </>
  );
}
