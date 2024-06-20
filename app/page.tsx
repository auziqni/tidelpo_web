import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}landing%2Fhero.jpg`}
        alt="Next.js logo"
        width={500}
        height={500}
        className=""
      />
    </main>
  );
}
