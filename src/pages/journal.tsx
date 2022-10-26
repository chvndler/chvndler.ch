// eslint-disable-next-line import/no-unresolved
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const PostCard = (post: Post) => {
  return (
    <div>
      <h2>
        <Link href={post.url}>
          <a className="text-blue-700 hover:text-blue-900">{post.title}</a>
        </Link>
      </h2>
      <time dateTime={post.date} className="block text-xs text-gray-600 mb-2">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  );
};

export const JournalPage = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="max-w-xl mx-auto py-8">
      <h1>Next.js Example</h1>

      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
};

export default JournalPage;
