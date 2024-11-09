import Link from "next/link";

interface Props {
  name: string;
  items: { name: string; link: string }[];
}

export default function FooterItem({ name, items }: Props) {
  return (
    <div className="flex flex-col gap-2.5 min-w-fit">
      <span className="text-xl font-bold">{name}</span>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="text-sm hover:underline hover:underline-offset-4">
          {item.name}
        </Link>
      ))}
    </div>
  );
}