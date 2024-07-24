import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prayers, renderTime } from "@/utils/prayerTypes";
import Image from "next/image";


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
          <TableRow key={prayer.name} className="border-0">
            <TableCell className="flex gap-2 my-2 md:gap-4 rounded-sm drop-shadow-sm bg-white w-36 px-4 py-2 mx-auto">
              <Image
                src={prayer.logo}
                alt={prayer.name}
                className="w-6 h-6"
                width={12}
                height={12}
              />
              <span className=" md:text-base text-sm text-left font-medium">
                {prayer.name}
              </span>
            </TableCell>
            <TableCell className="text-nowrap text-sm rounded-sm drop-shadow bg-white w-max text-center mx-auto">
              <p>{renderTime(prayer.adhan, prayer.meridian)}</p>
            </TableCell>
            <TableCell className="text-nowrap text-sm rounded-sm drop-shadow bg-white w-max text-center  mx-auto">
              {renderTime(prayer.iqhama, prayer.meridian)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
