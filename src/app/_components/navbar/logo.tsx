import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  label: string;
};

const Logo = ({ label }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center">
      <Image src={label} alt='logo' height={170} width={170} className='text-white' />
    </Link>
  );
}

export default Logo;
