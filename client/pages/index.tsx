import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import { FiFigma, FiCode, FiBox } from 'react-icons/fi'
const Home = () => {
  return (
    <>
      <PageTemplate title="Home - Collosal">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="PT TRITEK Indonesia - Solusi Terbaik untuk Kebutuhan Manufaktur Anda!"
              description="Kami selalu siap memenuhi kebutuhan pelanggan dari berbagai industri, dengan komitmen terhadap inovasi dan keunggulan."
              badge="MANUFACTUR-INDUSTRY"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink
              value="Learn More"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Layanan Manufaktur"
              description="PT TRITEK Indonesia menyediakan layanan cutting, piercing, stamping, anodizing, tapping, welding, milling, dan grinding. Dengan mesin canggih dan tenaga ahli, kami menghasilkan komponen logam presisi tinggi untuk berbagai industri, termasuk otomotif dan elektronik."
              icon={<FiFigma />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Layanan Pendukung"
              description="Kami juga menawarkan layanan pengiriman dan logistik, serta quality assurance (QA). Armada kendaraan kami memastikan produk sampai tepat waktu, dan tim QA kami menjamin setiap produk memenuhi standar kualitas tinggi. Kami juga membantu dalam prototyping dan pengembangan produk baru."
              icon={<FiCode />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Produk Utama"
              description="Produk utama kami termasuk komponen otomotif seperti dudukan plat nomor sepeda motor dan berbagai komponen elektronik presisi tinggi. Kami melayani industri otomotif dan elektronik dengan produk berkualitas yang dirancang untuk performa terbaik."
              icon={<FiBox />}
            />
          </div>
        </section>
        {/* Logo List */}
        <LogoList />
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/how-we-work-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="Kami menerima pesanan, memahami kebutuhan pelanggan, dan membuat desain serta prototipe."
              paragraph=" Setiap produk melewati tahap quality assurance untuk memastikan kualitas. Setelah itu, produk dikemas dan dikirim menggunakan armada kami untuk memastikan pengiriman tepat waktu. Kami juga menyediakan layanan purna jual untuk menjamin kepuasan pelanggan"
              badge="BAGAIMANA KITA BEKERJA"
            />
          </aside>
        </section>
        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="Kami memiliki tim yang berpengalaman dan siap membantu anda"
                paragraph="Di balik ketangguhan mesin dan presisi produk, ada semangat juang tim manufaktur yang tak tergoyahkan. Kita adalah roda penggerak yang kokoh, mengantarkan perusahaan menuju puncak kejayaan."
                badge="Team Kami"
              />
              <ButtonLink
                value="Lihat Team Kami"
                href="/teams"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/team-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Our Projects */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Kami telah menyelesaikan banyak proyek luar biasa yang tidak akan Anda percayai"
              badge="PROJECTS"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="PRESS PART"
                description="Ada sekitar 5 kurang lebih project ini"
                image='images/test-123.png'
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="Cutting ,Pierching, dan anodaizing"
                description="Pemotongan dan pelubangan bahan logam sesuai dengan spesifikasi yang dibutuhkan oleh pelanggan,Proses pelapisan anodizing untuk meningkatkan ketahanan korosi dan memberikan tampilan estetis pada produk logam."
                bottomSquareSize="big"
                image='images/dudukan-plat-nomor.png'
              />
            </div>
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default Home
