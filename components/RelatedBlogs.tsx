import Link from "next/link";
import { blogPosts } from "@/data/blogs";

type RelatedBlogsProps = {
  slugs: string[];
};

export default function RelatedBlogs({ slugs }: RelatedBlogsProps) {
  const posts = blogPosts.filter((post) => slugs.includes(post.slug)).slice(0, 3);

  if (!posts.length) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-[#15233d] p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-white">Related Blogs</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-2xl border border-slate-200 bg-[#15233d] p-4 transition hover:shadow-md"
          >
            <p className="text-xs font-semibold text-blue-700">{post.category}</p>
            <h3 className="mt-2 text-base font-semibold text-white">{post.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
