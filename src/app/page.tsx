import Link from 'next/link';
import { posts, Post as PostType } from '../../blog/data/posts';

export default function Home() {
  return (
    <div className='bg-red-950 text-gray-50  h-screen '>
      <h1 className='text-center text-6xl pt-5 pb-8'>My posts</h1>
      <ul  className='flex  flex-col justify-center items-center gap-8  text-xl'>
        {posts.map((post: PostType) => (
          <li key={post.id}>
            {/* Use dynamic link to post id */}
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
   </div>
  );
}
