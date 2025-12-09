import BentoGrid from '@/components/BentoGrid'
import HeroCard from '@/components/cards/HeroCard'
import StackCard from '@/components/cards/StackCard'
import AvailabilityCard from '@/components/cards/AvailabilityCard'
import TrustCard from '@/components/cards/TrustCard'
import ProjectCard from '@/components/cards/ProjectCard'
import ContactCard from '@/components/cards/ContactCard'

export default function Home() {
  return (
    <BentoGrid>
      <HeroCard />
      <StackCard />
      <AvailabilityCard />
      <TrustCard />
      
      <ProjectCard
        title="E-commerce Store"
        category="shopify"
        span="1x2"
      />
      
      <ProjectCard
        title="SaaS Dashboard"
        category="engineering"
        span="1x2"
      />
      
      <ContactCard />
    </BentoGrid>
  );
}

