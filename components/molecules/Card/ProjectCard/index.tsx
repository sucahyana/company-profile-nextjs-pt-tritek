import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import LazyCard, { LazyCardProps } from 'components/atoms/LazyCard'
import Text from 'components/atoms/Text'

interface ProjectCardProps extends LazyCardProps {
  title: string
  description: string
  image: string // Tambahkan prop gambar dengan tipe string
}

const ProjectCard = ({
  title,
  description,
  image,
  bottomSquareSize = 'small',
  height = 450,
}: ProjectCardProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-col place-items-center text-center mt-10">
      <div className="mb-2.5">
          <img src={image} alt={title} className="w-full h-auto" />
        </div>
        <div className="mb-2.5">
          <Text value={title} textStyle="ProjectTitle" />
        </div>
        <div className="mb-9">
          <Text value={description} textStyle="ProjectDescription" />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
