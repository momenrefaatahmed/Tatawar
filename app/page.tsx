
import HeroSection from '@/components/HeroSection/HearoSection'
import Stats from '@/components/Stats/Stats'
import Services from '@/components/services/services'
import About from '@/components/About/About'
import OurPartners from '@/components/Our Partners/OurPartners'
import Footer from '@/components/Footer/Footer'
export default function Home() {
  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <Stats/>
      <Services />
      <About/>
      <OurPartners/>
      <Footer/>
    </div>
  )
}
