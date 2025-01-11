
import Image from "next/image";

export default function IslamicAcademy() {
  return (
    <div className="w-screen min-h-max flex flex-col items-center justify-center gap-20 py-12 px-[7.5%] md:px-[15%]">
      <h2 className="font-semibold text-3xl text-center text-black mt-12">
        SEMRA Islamic Academy
      </h2>

      <section>
        <h2 className="font-semibold text-center text-xl mb-12">
          Mision & vision
        </h2>
        <div>
          <h3 className="font-semibold text-left text-md mb-4">Our Mision</h3>{" "}
          To impact academic and moral knowledge of Islam to the children with
          the Quran, Hadith and other relevant Islamic literatures. Islamiyyah
          was restructured in January 2016 when classes were created, syllabus
          developed, structures were put in place and new set of staff were
          recruited to run the Islamiyyah. Our priority remains impacting in our
          pupils’ Islamic knowledge and morals which can only be achieved by the
          cooperation of the parents/guardians and the authorities at the
          Islamiyyah. Thank you for trusting us with your wards.
        </div>
        <div>
          <h3 className="font-semibold text-left text-md mb-4 mt-4">
            {" "}
            Our vision{" "}
          </h3>
          To build and maintain an Islamic learning center that produces future
          leaders through the Islamic faith, knowledge, and inspiration.
        </div>
      </section>

      <div className="w-[100%] h-96 md:h-[500px] relative">
        <Image
          className="object-cover rounded-md md:rounded-lg"
          fill
          src="https://uxat7lu2fpipwkob.public.blob.vercel-storage.com/mosque-media/mosque2-xOKKbrhZcK4NGB7nti2QvVqD8VoEZ1.jpeg"
          alt="Suncity Mosque"
        />
      </div>
    </div>
  );
}
