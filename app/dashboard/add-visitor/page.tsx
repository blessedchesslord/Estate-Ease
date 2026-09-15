import Image from "next/image"
import Link from "next/link"

const Addvisitor = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 w-full gap-10">
      <p className="text-xs">No visitors yet</p>
      <Image src="/images/add visitor icon.png" alt="Add visitor" width={200} height={200}/>
      <Link href="/dashboard/book-visitor" className="bg-[#EE7421] text-white p-3 rounded-md w-3/5 text-center">Add Visitor</Link>
    </div>
  )
}

export default Addvisitor