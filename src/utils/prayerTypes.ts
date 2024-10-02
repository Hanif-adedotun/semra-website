import React from "react";

export const prayers = [
  {
    logo: "/icons/fajr.svg",
    name: "jumah",
    adhan: "01:15",
    iqhama: "01:15",
    meridian: "pm",
  },
  {
    logo: "/icons/fajr.svg",
    name: "fajr",
    adhan: "05:12",
    iqhama: "05:25",
    meridian: "am",
  },
  {
    logo: "/icons/dhur.svg",
    name: "dhuhur",
    adhan: "12:50",
    iqhama: "13:00",
    meridian: "pm",
  },
  {
    logo: "/icons/asr.svg",
    name: "asr",
    adhan: "15:40",
    iqhama: "15:50",
    meridian: "pm",
  },
  {
    logo: "/icons/maghrib.svg",
    name: "maghrib",
    adhan: "18:23",
    iqhama: "18:30",
    meridian: "pm",
  },
  {
    logo: "/icons/isha.svg",
    name: "isha",
    adhan: "19:30",
    iqhama: "19:40",
    meridian: "pm",
  },
];

export const renderTime = (time:string, meridian:string) => {
      const [hours, minutes] = time.split(":").map(Number);
      return `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${meridian.toUpperCase()}`;
}

// Utility function to convert time string to minutes
export const timeToMinutes = (timeString:string) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
};

// Custom hook to get the next prayer index
export const useNextPrayerIndex = () => {
return React.useMemo(() => {
     const now = new Date();
     const currentMinutes = now.getHours() * 60 + now.getMinutes();

     const nextPrayer = prayers.findIndex(
     (prayer) => timeToMinutes(prayer.adhan) > currentMinutes
     );

     return nextPrayer === -1 ? 0 : nextPrayer;
}, []); // Empty dependency array means this will only recalculate on component mount
};
