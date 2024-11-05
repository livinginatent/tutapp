/* eslint-disable @typescript-eslint/no-require-imports */
import Image from "next/image";
import construction from "../../Under-Construction-Icon-PNG.png";
import SVGComponent from "./tut";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <SVGComponent/>
      <h1 className="text-2xl">Under construction</h1>
      <p className="text-center">
        Our website is currently under construction to bring you an enhanced
        experience. We’re working hard behind the scenes and will be back soon
        with exciting new features. Thank you for your patience!
      </p>
    </div>
  );
}
