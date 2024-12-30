import { ReactNode, useState } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
}

export default function CollapsibleSection({
  title,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="">
      <button
        className="text-left text-lg p-3 bg-white hover:bg-gray-100 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "▼" : "►"} {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}
