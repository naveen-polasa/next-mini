import Link from "next/link";

export default function Home() {
  return (
    <main>
      Hey There
      <div className="flex gap-3">
        <Link href={"tasks"}>Tasks</Link>
        <Link href={"posts"}>Posts</Link>
        <Link href={"counter"}>Counter</Link>
        <Link href={"counter2"}>Counter 2</Link>
      </div>
    </main>
  );
}
