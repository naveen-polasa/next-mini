import Link from "next/link";

export default async function page() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();

  return (
    <div>
      {data?.slice(0, 55).map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
