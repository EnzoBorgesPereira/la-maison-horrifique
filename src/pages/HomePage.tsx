import { HeroSection } from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { GamesSection } from '../components/GamesSection'
import { ContactInfo } from '../components/ContactInfo'

export const HomePage = () => {
    return (
        <main className="flex-grow bg-white dark:bg-gray-900 transition-colors duration-300">
            <HeroSection />
            <AboutSection />
            <GamesSection />
            <ContactInfo />
        </main>
    )
}