import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
    <Link
      className={`${
        isActive
          ? "font-bold text-gray-800 dark:text-gray-100"
          : " text-gray-600 dark:text-gray-300"
      } sm:inline-block transition-all text-[17px] hidden px-2 md:px-3 py-[3px] hover:bg-gray-100 dark:hover:bg-neutral-700/50 rounded-md`}
      href={href === "/home" ? "/" : href}
    >
      <p className="capitalize">{text}</p>
    </Link>
  );
}
