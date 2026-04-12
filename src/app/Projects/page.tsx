import React from 'react'
import ProjectsHero from './ProjectComponents/ProjectsHero'
import ProjectGrid from './ProjectComponents/ProjectGrid'
import ProcessSection from './ProjectComponents/ProcessSection'
import TechStack from './ProjectComponents/TechStack'
import ProjectCTA from './ProjectComponents/ProjectCTA'

const page = () => {
  return (
    <div className="min-h-screen">
        <ProjectsHero></ProjectsHero>
        <ProjectGrid></ProjectGrid>
        <ProcessSection></ProcessSection>
        <TechStack></TechStack>
        <ProjectCTA></ProjectCTA>

    </div>
  )
}

export default page