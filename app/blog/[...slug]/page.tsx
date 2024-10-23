import { posts } from "#site/content";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface PostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPost(slug: string[]) {
  const path = slug?.join("/");
  if (!path) return null;

  const post = posts.find((post) => post.slugAsParams === path);
  return post;
}

// statically generates params at build, since we know all the slugs from content/blog
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const loadedParams = await params;
  const post = await getPost(loadedParams?.slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="max-w-screen-md">
      <h1 className="my-4 text-4xl font-bold">{post.title}</h1>
      {post.description && <p className="">{post.description}</p>}
      <hr className="mt-4"/>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, remarkGfm]}
        components={{
          h1: ({ ...props }) => <h1 className="text-4xl font-bold" {...props} />,
          h2: ({ ...props }) => <h2 className="text-3xl font-bold" {...props} />,
          p: ({ ...props }) => <p className="m-4" {...props} />,
          a: ({ ...props }) => <a className="text-blue-500 underline" {...props} />,
          code: ({ ...props }) => <code className="bg-gray-400 dark:bg-slate-700 p-1 rounded ml-4" {...props} />,
          ol: ({ ...props }) => <ol className="list-decimal list-inside m-4" {...props} />,
          ul: ({ ...props }) => <ul className="list-disc list-inside m-4" {...props} />,
          pre: ({ children, ...props }) => (
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto" {...props}>
              {children}
            </pre>
          ),
          hr: ({ ...props }) => <hr className="m-4" {...props} />,
        }}
        className="mt-4"
      >
        {post.body}
      </ReactMarkdown>
    </article>
  );
}
