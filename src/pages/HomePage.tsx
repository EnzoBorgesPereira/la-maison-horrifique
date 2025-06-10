import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { GamesSection } from '../components/GamesSection'
import { ContactInfo } from '../components/ContactInfo'

export const HomePage = () => {
    return (
        <main className="flex-grow">
            <HeroSection />
            <AboutSection />
            <GamesSection />
            <ContactInfo />
        </main>
    )
}