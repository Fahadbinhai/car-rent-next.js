import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      hello world

    <p>I am from layout</p>

    <button className="btn btn-primary" >hello</button>
    <Link className="btn btn-primary" href='/service'> services</Link>

      
    </div>
  );
}
