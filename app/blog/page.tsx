import { posts } from "#site/content";
import { PostItem } from "@/components/posts/post-item";

// Main view for blogs and other posts
export default async function BlogPage() {
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="mt-4 flex flex-col">
      <div>
        <h1 className="font-black text-4xl">Blog</h1>
        <p className="mt-3 dark:bg-slate-800 text-xl text-muted-foreground">
          My adventures and learnings as a software engineer. 
        </p>      
      </div>
      <hr className="mt-8 dark:border-slate-600"/>
      {posts && posts.length > 0 ? (
        <ul className="items-center mt-8">
          {sortedPosts.map((post) => (
            <PostItem
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
              description={post.description}
            />
          ))}
        </ul>
      ) : <p>No posts yet</p>}
    </div>
  )
}