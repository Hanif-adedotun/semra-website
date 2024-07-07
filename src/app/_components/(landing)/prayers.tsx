import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const prayers = [
  { logo: '/icons/fajr.svg',name: "jumah", adhan: "05:30 AM", iqhama: "05:30 AM" },
  { logo: '/icons/fajr.svg', name: "fajr", adhan: "05:30 AM", iqhama: "05:30 AM" },
  { logo: '/icons/dhur.svg', name: "dhuhur", adhan: "05:30 AM", iqhama: "05:30 AM" },
  { logo: '/icons/asr.svg', name: "asr", adhan: "05:30 AM", iqhama: "05:30 AM" },
  { logo: '/icons/maghrib.svg', name: "maghrib", adhan: "05:30 AM", iqhama: "05:30 AM" },
  { logo: '/icons/isha.svg', name: "isha", adhan: "05:30 AM", iqhama: "05:30 AM" },
];
export default function PrayerTable() {
  return (
    <Table>
      <TableCaption>
        *All prayer times are in West Africa Time (WAT)
      </TableCaption>
      <TableHeader>
        <TableRow className="border-0">
          <TableHead className="mx-auto text-center text-base font-medium">
            Name of Sallat
          </TableHead>
          <TableHead className="mx-auto text-center text-base font-medium">
            Adhan
          </TableHead>
          <TableHead className="mx-auto text-center text-base font-medium">
            Iqama
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="border-0">
        {prayers.map((prayer) => (
          <TableRow key={prayer.name} className="border-0 ">
            <TableCell className="flex gap-2 my-2 sm:gap-4 rounded-sm drop-shadow-sm bg-white w-36 px-4 py-2 mx-auto">
              <Image
                src={prayer.logo}
                alt={prayer.name}
                className="w-6 h-6"
                width={12}
                height={12}
              />
              <span className="ml-2 font-medium">{prayer.name}</span>
            </TableCell>
            <TableCell className="my-2 rounded-sm drop-shadow bg-white w-36 px-4 py-2 mx-auto">
              {prayer.adhan}
            </TableCell>
            <TableCell className="my-2 rounded-sm drop-shadow bg-white w-36 px-4 py-2 mx-auto">
              {prayer.iqhama}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
