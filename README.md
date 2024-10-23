[Live Preview](https://blog-beta-one-49.vercel.app/) hosted on Vercel

## Getting Started 
To get started with the project, you can fork the repository and clone it to your local machine.

Once you have the repository cloned, navigate to the project directory.

And use the lts version of node.js (I personally use Node Version Manager (nvm) to manage my node versions):

```bash
nvm use --lts
```

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
To add a new blog post, create a markdown file (`.md`) in the content/blog directory. The file name should follow a hyphen-delimited naming convention (e.g. `this-is-my-great-blog.md`). Each file should include the following frontmatter:

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
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Velite](https://velite.js.org/)
- [React Markdown](https://www.npmjs.com/package/react-markdown/v/8.0.6)

## About this project
I decided to go with a static blog project, I ended up using Next.js 15 and using the new app router (I've mostly used the older pages router since I started using Next.js at Boxhub before its introduction). It was pretty fun to learn how to use and manipulate Markdown files, as it's not something I've done too much professionally. I would say that this application shows off more of my Frontend skills as there weren't many backend components. Learning more about the new features in Next.js 15 was also a plus.

With regards to server side rendering, previously I would use things like getServerSideProps() however, based on my readings I believe that it's the default for the app router.

In the future, if I were to build out this application more I would add things like CDNs for hosting the images & videos that could potentially be contained in the blog posts. I would also implement an authentication layer to allow me to log in and create/edit blog posts. Additionally, I would like to add a comments feature, which would involve creating a DB and the various endpoints for CRUD operations. I would also add some more flair to the styling, including styling for mobile views and more responsive components.
