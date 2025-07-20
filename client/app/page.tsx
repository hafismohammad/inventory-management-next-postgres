import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-6">
  <div className="flex justify-between items-center mb-4">
    <h1 className="text-2xl font-bold">Inventory</h1>
    <Link href="/new">
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Add New Item
      </button>
    </Link>
  </div>

  {/* Table or list of items here */}
</main>

  )
}
