import rehypePrettyCode from "rehype-pretty-code";
import { defineConfig, defineCollection, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

/*
  * Velite helps with creating types for the various posts that will be created in the blog.
  * The schema is defined using zod which is a TypeScript schema library.
*/
const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.md",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(100),
      description: s.string().max(1000).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      body: s.markdown(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
    remarkPlugins: [],
  },
});
