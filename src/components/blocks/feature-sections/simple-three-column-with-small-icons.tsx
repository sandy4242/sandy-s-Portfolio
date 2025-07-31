import { User, Code, Target } from 'lucide-react'

const features = [
  {
    name: 'Me',
    description:
      'A CSE undergrad Student who is just a bit curious about everything related to technology and everything. I have learnt a lot of things in my journey so far and I am still learning. First started with HTML, CSS and JS and then I started exploring React and Next.js, but eventually I finding my interest in Flutter and Dart. Now contributing to open source projects and again still learning...',
    icon: User,
  },
]

export default function SimpleThreeColumnWithGlassCards() {
  return (
    <section id="about" className="min-h-screen py-24 px-6 sm:py-32 text-black ">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm font-semibold text-emerald-400">Get to know me</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">About Me</p>
          <p className="mt-6 text-lg text-black">
            A passionate software engineer who believes great code is not just functional, but readable, maintainable, and impactful.
          </p>
        </div>

        <div className="mt-20 gap-8 mx-auto center ">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col bg-white/5 backdrop-blur-sm p-6 border border-white/20 shadow-md rounded-xl transition-transform hover:scale-105 bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/5 
             mx-auto min-h-[250px] max-w-2xl w-full"
            >
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-black mb-2 ">
                <feature.icon className="size-5 text-emerald-400" />
                {feature.name}
              </dt>
              <dd className="text-base sm:text-lg text-[#10B981] ">{feature.description}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
