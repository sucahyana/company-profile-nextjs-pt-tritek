import Button from 'components/atoms/Button'
import Select from 'components/atoms/Form/Select'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'

const Project = () => {
  interface Project {
    image: string;
    title: string
    description: string
  }
  const projectList: Project[] = [
    {
      title: 'Press Part',
      description: 'Product Dari beberapa perusahaan',
      image : '/images/dudukan-plat-nomor.png',
    },
    {
      title: 'Cutting',
      description: 'Pemotongan dengan mesin Canggih dan Modern',
      image : '/images/test-123.png'
    },
    {
      title: 'Pierching',
      description: '',
      image : '/images/pcb.png'
    },
    {
      title: 'anodaizing',
      description: 'Pelapisan Product',
      image : '/images/kuat.png'
    },
  ]
  return (
    <PageTemplate title="Project - Collosal">
      <section className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <aside
          className="w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-6/12"
          data-aos="fade-right"
        >
          <div className="text-center md:text-left">
            <PageSentence
              badge="Product"
              title="Kami telah menyelesaikan banyak proyek luar biasa yang tidak akan Anda percayai"
            />
          </div>
        </aside>
       
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div className="basis-full lg:basis-1/2" key={randomString(64)} data-aos="zoom-in-up">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                />
              </div>
            )
          })}
        </div>
        <Button value="Load More" color="white" style="light" />
      </section>
    </PageTemplate>
  )
}

export default Project
