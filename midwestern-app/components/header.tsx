import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="logo__container">
        <Image
          src="/images/mwi-logo-horizontal.png"
          alt="Picture of the author"
          width={300}
          height={50}
        />
      </div>
    </header>
  )
}