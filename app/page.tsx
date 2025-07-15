import Header from "@/components/Header"
import Hero from "@/components/Hero"
import IdeaConceptSolution from "@/components/IdeaConceptSolution"
import WhyChooseUs from "@/components/WhyChooseUs"
import Services from "@/components/Services"
import Integration from "@/components/Integration"
import Partners from "@/components/Partners"
import Roadmap from "@/components/Roadmap"
import Team from "@/components/Team"
import BusinessCall from "@/components/BusinessCall"
import Testimonials from "@/components/Testimonials"
import CustomerReviews from "@/components/CustomerReviews"
import SuccessStories from "@/components/SuccessStories"
import QuickSupport from "@/components/QuickSupport"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Header />
      <Hero />
      <IdeaConceptSolution />
      <WhyChooseUs />
      <Services />
      <Integration />
      <Partners />
      <Roadmap />
      <Team />
      <BusinessCall />
      <Testimonials />
      <CustomerReviews />
      <SuccessStories />
      <QuickSupport />
      <Footer />
    </main>
  )
}
