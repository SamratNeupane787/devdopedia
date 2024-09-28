import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
export default function FooterSection() {
  return (
    <main>
      <div className=" grid  place-items-center sm:grid-cols-1 md:grid-cols-2">
        <div>
          <Image src={logo} height={180} width={280} />
        </div>
        <div>
          <ul className=" flex flex-row  pb-7 ">
            <Link href="#">
              <li className=" px-4">Home</li>
            </Link>
            <Link href="#">
              <li className=" px-4">About</li>
            </Link>
            <Link href="#">
              <li className=" px-4">Contact</li>
            </Link>
            <Link href="#">
              <li className=" px-4">Socials</li>
            </Link>
          </ul>
        </div>
      </div>
    </main>
  );
}
