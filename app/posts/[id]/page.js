export default async function PostPage({ params }) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      next: {
        revalidate: 50,
      },
    }
  );
  const data = await resp.json();

  return (
    <div>
      <p>title: {data.title}</p>
      <p>body: {data.body}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();

  return data.slice(0, 55).map((item) => ({ id: item.id.toString() }));
}
