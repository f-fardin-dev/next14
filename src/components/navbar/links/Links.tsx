import Link from "next/link";

const links = [
  { title: "HomePage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

export const Links = () => {
  return (
    <div>
      {links.map((link) => (
        <Link key={link.path} href={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};
