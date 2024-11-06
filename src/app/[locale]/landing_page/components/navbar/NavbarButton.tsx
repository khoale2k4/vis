import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Props = {
  name: string;
  link: string;
  className?: string;
}

export default function NavbarButton({name, link, className}: Props) {
  const defaultClassname = "flex items-center justify-center px-4 py-2 rounded-md h-fit w-fit md-max:text-sm md-max:px-3 md-max:py-1.5 min-w-fit active:scale-95 font-bold"
  return(
    <Link href={link} className={twMerge(defaultClassname, className)}>
      {name}
    </Link>
  )
}