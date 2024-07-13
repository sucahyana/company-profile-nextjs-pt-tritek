import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <PageTemplate title="About - Collosal">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={'/images/about-illustration.webp'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
              
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="ABOUT"
            title="Kami adalah orang-orang yang kreatif, cerdas, dan pekerja keras"
            description={`Beberapa orang kreatif berkumpul di tempat yang sama. Kami berkolaborasi untuk menghasilkan hasil terbaik, dicintai oleh klien dan nyaman bagi pengguna. Di sini kami menjaga kebersamaan meskipun dengan latar belakang yang berbeda, semua orang di sini sudah ahli di bidangnya masing-masing.`}
          />
        </aside>
      </section>
      <LineDivider />
  
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="OUR TEAMS"
            title="Temui tim! Semua orang kreatif ada di sini"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-1.webp"
              job="DIREKTUR"
              name="Ir Edi Nopal"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-2.webp"
              job="MANAGER PROD dan QA"
              name="Sumaji Sutoyo"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-3.webp"
              job="MANAGER HRD & AKUNTING"
              name="RIKI"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-4.webp"
              job="MANAGER MKT & Purchasing"
              name="Heri Suheri"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-5.webp"
              job="LEADER QA"
              name="Akbar"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-6.webp"
              job="LEADER PROD STAMPING"
              name="Malik"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-1.webp"
              job="STAF MKT & Purchasing"
              name="Dedeh W"
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default About
