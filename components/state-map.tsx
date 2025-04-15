import Image from "next/image"

export default function StateMap() {
  return (
    <div className="relative w-full h-[400px]">
      <Image src="/images/us-map.png" alt="Unclaimed Money by State Map" fill className="object-contain" />
    </div>
  )
}
