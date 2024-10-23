[Live Preview](blog-beta-one-49.vercel.app)

## Getting Started 
First install the required packages:

```bash
npm i --save
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the blog!

## Adding new blog posts
To add a new blog post, create a new markdown file in the `content/blog` directory. The file should have the following frontmatter:

```yaml
---
title: Hello World
description: This is a test blog post
date: 2024-10-18
published: true
---
```

The content of the blog post goes below the frontmatter. You can use Markdown syntax to format the content.

The content is automatically rendered as a blog post on the website when you run the development server.

## Technologies used
- [https://nextjs.org/](Next.js)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Velite](https://velite.js.org/)
- [React Markdown](https://www.npmjs.com/package/react-markdown/v/8.0.6)