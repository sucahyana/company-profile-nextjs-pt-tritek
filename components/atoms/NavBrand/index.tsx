import useMobileDeviceDetection from 'hooks/useMobileDetection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBrand = () => {
  const isMobile = useMobileDeviceDetection()
  return (
    <>
      <div
        className={`select-none ${
          isMobile ? 'cursor-default' : 'cursor-pointer'
        }`}
      >
        <Link href={'/'} passHref>
          <div className="w-fit h-fit">
            <Image src={'/images/logo.png'} width='90px' height={60} alt='company brand' loading='lazy' />
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavBrand
