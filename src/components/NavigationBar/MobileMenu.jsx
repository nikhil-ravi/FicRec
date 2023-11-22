import Link from "next/link";

export default function MobileMenu({ links, handleClick }) {
  return (
    <div className="absolute font-normal bg-white dark:bg-darkPrimary w-screen h-screen top-0 left-0 z-10 sm:hidden">
      <nav className="mt-28 mx-8 flex flex-col">
        {links.map((link, index) => {
          const navLink =
            link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`;

          return (
            <Link
              href={navLink}
              key={`mobileNav-${index}`}
              passHref
              className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-semibold flex w-auto py-4 capitalize text-base cursor-pointer"
              onClick={handleClick}
            >
              {link === "rss" ? link.toUpperCase() : link}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
