import { HardHat, Award, Clock } from "lucide-react"

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<HardHat className="h-8 w-8 text-black" />}
            title="Expert Team"
            description="Our team of certified professionals brings years of experience and expertise to every project."
          />
          <FeatureCard
            icon={<Award className="h-8 w-8 text-black" />}
            title="Quality Work"
            description="We are committed to delivering the highest quality construction services that exceed expectations."
          />
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-black" />}
            title="On-Time Delivery"
            description="We understand the importance of timelines and ensure projects are completed on schedule."
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
