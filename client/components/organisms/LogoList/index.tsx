import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import React from 'react'

const LogoList = () => {
  return (
    <>
      <section className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight" data-aos='fade-left'>
        <div className="">
          <Image
            src={'/images/PT. Cannet Ellektrik Indonesia.jpg'}
            width={120}
            height="100"
            alt="github logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/PT. Yanjin Indonesia (Japan Company).png'}
            width={120}
            height="100"
            alt="forbes logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/PT. Daytona AZIA (Perusahaan Jepang).png'}
            width={120}
            height="100"
            alt="google logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/pt adhi.png'}
            width={120}
            height="100"
            alt="microsoft logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/yasufuku.jpg'}
            width={120}
            height="100"
            alt="facebook logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/ABB_logo.svg'}
            width={120}
            height="100"
            alt="facebook logo"
          />
        </div>
        <div className="">
          <Image
            src={'/images/logo-fuji-dharma-electric.jpg'}
            width={120}
            height="100"
            alt="facebook logo"
          />
        </div>
      </section>
    </>
  )
}

export default LogoList
