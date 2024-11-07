import Link from "next/link"


export default function Footer() {
  return (
    <div className="flex flex-col items-start justify-between min-w-full px-8 py-10 mt-auto gap-x-48 gap-y-20 2xl:flex-row md:px-16 lg:px-28 xl:px-32 text-white-50 bg-darkblue-900">
      <div className="flex flex-col w-full gap-10 xl:w-fit h-fit">
        <div className="grid w-full grid-cols-2 gap-16 sm:grid-cols-3 md:grid-cols-4 h-fit xl:flex xl:flex-row">
          <div className="flex flex-col gap-2.5 min-w-fit">
            <span className="text-xl font-bold">VIStorage</span>
            {VIStorage.map((item, index) => (
              <Link key={index} href={item.link} className="text-sm hover:underline hover:underline-offset-4">{item.name}</Link>
            ))}
          </div>          
          <div className="flex flex-col gap-2.5 min-w-fit">
            <span className="text-xl font-bold">Products</span>
            {Products.map((item, index) => (
              <Link key={index} href={item.link} className="text-sm hover:underline hover:underline-offset-4">{item.name}</Link>
            ))}
          </div>          
          <div className="flex flex-col gap-2.5 min-w-fit">
            <span className="text-xl font-bold">Features</span>
            {Features.map((item, index) => (
              <Link key={index} href={item.link} className="text-sm hover:underline hover:underline-offset-4">{item.name}</Link>
            ))}
          </div>          
          <div className="flex flex-col gap-2.5 min-w-fit">
            <span className="text-xl font-bold">Support</span>
            {Support.map((item, index) => (
              <Link key={index} href={item.link} className="text-sm hover:underline hover:underline-offset-4">{item.name}</Link>
            ))}
          </div>          
          <div className="flex flex-col gap-2.5 min-w-fit">
            <span className="text-xl font-bold">Legal</span>
            {Legal.map((item, index) => (
              <Link key={index} href={item.link} className="text-sm hover:underline hover:underline-offset-4">{item.name}</Link>
            ))}
          </div>          
        </div>
        <div className="flex flex-col gap-4">
            <span className="text-xl font-bold">Media</span>
            <div className="flex flex-row gap-8">
              {Media.map((item, index) => (
                <Link key={index} href={item.link} className="text-sm hover:underline hover:underline-offset-4">{item.name}</Link>
              ))}
            </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full h-full gap-4">
        <div className="rounded-full size-28 bg-darkblue-500" />
        <span className="text-xl font-bold">VIStorage</span>
        <div className="h-0 border w-60 border-white-50" />
        <span className="flex flex-col items-center justify-center text-sm">
          <span>Copyright ©2024 VietName Innovation Solution.</span>
          <span>All Rights Reserved.</span>
        </span>
      </div>
    </div>
  )
}

const VIStorage = [
  {
    name: "Desktop app",
    link: "#",
  },
  {
    name: "Mobile app",
    link: "#",
  },
  {
    name: "Product",
    link: "#",
  },
  {
    name: "Features",
    link: "#",
  },
]

const Products = [
  {
    name: "Basic",
    link: "#",
  },
  {
    name: "Plus",
    link: "#",
  },
  {
    name: "Essential",
    link: "#",
  },
  {
    name: "Business",
    link: "#",
  },
  {
    name: "Business Pro",
    link: "#",
  },
  {
    name: "Enterprise",
    link: "#",
  },
]

const Features = [
  {
    name: "Smart search with AI",
    link: "#",
  },
  {
    name: "Send large documents",
    link: "#",
  },
  {
    name: "Secure file tranfer",
    link: "#",
  },
  {
    name: "Cloud backup",
    link: "#",
  },
  {
    name: "Role-base file's accessibility ",
    link: "#",
  },
]

const Support = [
  {
    name: "Help center",
    link: "#",
  },
  {
    name: "Contact us",
    link: "#",
  },
]

const Legal = [
  {
    name: "Privacy policy",
    link: "#",
  },
  {
    name: "Terms of service",
    link: "#",
  },
  {
    name: "Copyright",
    link: "#",
  }
]

const Media = [
  {
    name: "Facebook",
    icon: null,
    link: "#",
  },
  {
    name: "X",
    icon: null,
    link: "#",
  },
  {
    name: "Youtube",
    icon : null,
    link: "#",
  },
  {
    name: "Email",
    icon: null,
    link: "#",
  }
]