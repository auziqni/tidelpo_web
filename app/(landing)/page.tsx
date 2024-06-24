import Image from "next/image";

interface CardLayananProps {
  url: string;
  title: string;
  description: string;
}

const cardLayanan: CardLayananProps[] = [
  {
    url: "/icon/map.png",
    title: "Lokasi",
    description: "Pemantauan lokasi yang akurat menggunkana saltelit",
  },
  {
    url: "/icon/tilt.png",
    title: "Kemiringan",
    description: "Pemantauan lokasi yang akurat menggunkana saltelit",
  },
  {
    url: "/icon/pressure.png",
    title: "Tekanan Udara ",
    description: "Pemantauan lokasi yang akurat menggunkana saltelit",
  },
  {
    url: "/icon/humidity.png",
    title: "Kelembaban Tanah",
    description: "Pemantauan lokasi yang akurat menggunkana saltelit",
  },
];

export default function Home() {
  return (
    <div className="relative ">
      <div id="hero" className="h-screen relative">
        <div className="absolute bottom-1/2 z-10 pl-20 text-white">
          <h3 className="text-xl font-slackey">
            Cermati Alur Dari Hulu Ke Hilir
          </h3>
          <h1 className=" text-5xl font-overlock font-black">
            Monitor Tiang Listrik dengan Mudah dan Efisien
          </h1>
        </div>
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}landing%2Fhero.jpg`}
          alt="Next.js logo"
          fill
          style={{ objectFit: "cover" }}
          priority
          className=""
        />
      </div>

      <div id="layanan" className="flex flex-col  items-center mt-20 gap-10">
        <h2 className="font-slackey text-4xl">Layanan</h2>
        <div className=" flex gap-5 ">
          {cardLayanan.map((card, index) => (
            <CardLayanan key={index} {...card} />
          ))}
        </div>
      </div>

      <div
        id="tentang"
        className="flex  relative w-full justify-center gap-10 my-20"
      >
        <div className=" w-2/5 h-[503px] relative">
          <Image
            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}landing%2Fabout.png`}
            alt="Next.js logo"
            fill
            style={{ objectFit: "contain" }}
            className=""
          />
        </div>
        <div className=" w-2/5 h-[503px] mt-10">
          <h2 className="font-slackey text-4xl mb-10">TENTANG KAMI</h2>
          <p>
            {" "}
            Alat IoT Monitoring Tiang Listrik kami adalah solusi canggih dan
            terintegrasi yang dirancang untuk memastikan keamanan dan stabilitas
            tiang listrik Anda. Dengan teknologi monitoring real-time, alat ini
            memantau berbagai parameter penting seperti kemiringan tiang,
            lokasi, kelembaban tanah, dan tekanan udara di sekitar tiang
            listrik.
          </p>
          <div className="grid grid-cols-2 px-10 mt-10">
            <div className="col-span-1">
              <h3>Tim</h3>
              <p>nama 1</p>
              <p>nama 2</p>
            </div>
            <div className="col-span-1">
              <h3>alamat</h3>
              <p>
                Alamat Jl. Terusan Ryacudu, Way Huwi, Kec. Jati Agung, Kabupaten
                Lampung Selatan, Lampung 35365
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardLayanan({ url, title, description }: CardLayananProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-[244px] h-[330px]">
      <Image src={url} alt={title} width={120} height={120} />
      <h3 className="text-2xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
