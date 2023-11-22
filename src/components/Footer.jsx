import socialMedia from "@/content/socialMedia";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-darkPrimary text-gray-600 dark:text-gray-400/50 w-screen font-inter p-10 print:hidden">
      <div
        viewport={{ once: true }}
        className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl p-5 border-t-2 border-gray-200  dark:border-gray-400/10 mx-auto text-sm sm:text-base flex flex-col gap-5"
      >
        <section>
          <div className="flex flex-row gap-4 capitalize justify-center">
            {socialMedia.map((platform, index) => {
              return (
                <Link
                  key={index}
                  className="hover:text-black dark:hover:text-white w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={platform.url}
                >
                  {platform.title}
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </footer>
  );
}

function FooterLink({ route, text }) {
  return (
    <Link
      className="hover:text-black dark:hover:text-white w-fit"
      href={`/${route}`}
    >
      {text}
    </Link>
  );
}
