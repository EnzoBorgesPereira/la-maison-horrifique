import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { GamesSection } from '../components/GamesSection'
import { ContactInfo } from '../components/ContactInfo'

export const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <GamesSection />
            <ContactInfo />
        </main>
    )
}