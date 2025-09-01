import Image from "next/image";
import Link from "next/link";
import Banner from "./components/Banner";
import Information from "./components/Information";
import Support from "./components/Support";
import DisplayCar from "./components/DisplayCar";

export default function Home() {
  return (
    <div className="max-w-[1900px]">
      <Banner></Banner>
      <div className="mx-17">
        <Information></Information>
      </div>
      <div className="mx-17">
        <Support></Support>
      </div>
      <div className="mx-17">
        <DisplayCar></DisplayCar>
      </div>
    </div>
  );
}
