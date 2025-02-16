import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/trippy-tippy.jpg" alt="Trippy Tippy"
        width={3024} height={4032}
        className="w-full h-auto object-cover"
        layout="responsive"
        priority />
    </main>
  );
}
