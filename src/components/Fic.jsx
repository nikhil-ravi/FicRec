import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const Fic = ({ fic }) => {
  const metaText = [
    fic.metadata.Rated && `Rated: ${fic.metadata.Rated}`,
    fic.metadata.Language && fic.metadata.Language,
    fic.metadata.Genre && fic.metadata.Genre.join("/"),
    fic.metadata.Chapters &&
      `${fic.metadata.Chapters} chapter${fic.metadata.Chapters > 1 ? "s" : ""}`,
    fic.metadata.Words && `${fic.metadata.Words} words`,
    fic.metadata.Reviews > 0 && `${fic.metadata.Reviews} reviews`,
    fic.metadata.Favs > 0 && `${fic.metadata.Favs} favs`,
    fic.metadata.Follows > 0 && `${fic.metadata.Follows} follows`,
    fic.metadata.updated !== fic.metadata.published &&
      `Updated: ${new Date(fic.metadata.updated).toLocaleDateString()}`,
    `Published: ${new Date(fic.metadata.published).toLocaleDateString()}`,
    fic.metadata.Characters &&
      fic.metadata.Characters.replace(/"/g, "").replace(/,/g, ", "),
    fic.metadata.Status === "Complete" && fic.metadata.Status,
  ]
    .filter(Boolean)
    .join(" - ");
  return (
    <div className="p-2 border-b-2 pb-4">
      <div className="flex gap-1 items-center">
        <Link
          href={`https://www.fanfiction.net/s/${fic.id}`}
          className="text-lg text-blue-400 font-semibold"
        >
          {fic.metadata.title}
        </Link>
        <FaAngleRight />
        <p className="flex-1">{fic.metadata.author}</p>
        <strong className="">Score: {fic.score.toFixed(2)}</strong>
      </div>
      <p className="font-mono">{fic.metadata.summary}</p>
      <p className="text-sm">{metaText}</p>
    </div>
  );
};

export default Fic;
