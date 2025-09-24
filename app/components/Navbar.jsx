import Link from "next/link";
export default function navbar() {
  return (
    <div className="flex justify-between items-center mb-5 px-10 border-2 border-gray-300 rounded-lg shadow-lg py-5">
        <span><h2 className="text-2xl font-bold">ToDo</h2></span>
        <span>
            <Link href="/todo/addtopic" className="px-5 py-2 rounded-xl border-2 border-gray-500 hover:bg-gray-400">Add Topic</Link>
        </span>
    </div>
  )
}
