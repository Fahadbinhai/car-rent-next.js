import Image from "next/image";
import Link from "next/link";
import Banner from "./components/Banner";
import Information from "./components/Information";

export default function Home() {
  return (
    <div className="max-w-[1900px]">
      <Banner></Banner>
      <div className="mt-10 mx-17">
        <Information></Information>
      </div>
    </div>
  );
}
