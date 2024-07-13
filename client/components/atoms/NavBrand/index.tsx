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
         <h1>PT TRITEK INDONESIA</h1>
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavBrand
