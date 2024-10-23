import Link from "next/link";
import { Icons } from "../icons";
import moment from "moment";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
  description?: string;
}

// Reusable component for displaying posts
export function PostItem({ slug, title, description, date }: PostItemProps) {
  return (
    <article
      className="flex flex-col gap-2 border-border background-border p-4"
    >
      <div className="text-2xl font-black">
        <Link href={slug}>
          {title}
        </Link>
      </div>
      <div>
        {description}
      </div>
      <div className="flex flex-row w-full space-x-10">
        <div className="flex flex-row space-x-4">
          <Icons.calendar className="w-4 h-4 mt-0.5 mr-2"/>
          {moment(date).format("MMMM Do YYYY") }
        </div>
        <div className="justify-end">
          <Link href={slug}>
            Read More
          </Link>
        </div>
      </div>
    </article>
  )
}