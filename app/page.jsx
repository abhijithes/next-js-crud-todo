import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Link href='/todo' className="text-2xl">Go to todo app</Link>
    </div>
  );
}
