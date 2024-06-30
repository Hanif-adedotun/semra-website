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
      <TableCaption>*All prayer times are in West Africa Time (WAT)</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Sallah</TableHead>
          <TableHead>Adhan</TableHead>
          <TableHead>Iqama</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
          {prayers.map((prayer) => (
            <TableRow key={prayer.name}>
              <TableCell className='flex gap-2 sm:gap-4'>
                <Image src={prayer.logo} alt={prayer.name} className="w-6 h-6" width={12} height={12}/>
                <span className="ml-2 font-medium">{prayer.name}</span>
              </TableCell>
              <TableCell>{prayer.adhan}</TableCell>
              <TableCell>{prayer.iqhama}</TableCell>
            </TableRow>

          ))}
      </TableBody>
    </Table>
  );
}
