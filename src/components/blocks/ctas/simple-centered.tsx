import { Download } from 'lucide-react'

export default function SimpleCentered() {
    return (
      <div className="">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Download className="w-5 h-5 text-emerald-600" />
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-charcoal sm:text-5xl">
                Resume & Experience
              </h2>
            </div>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-neutral-600">
              Download my full resume to learn more about my professional experience and technical background.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="skill-badge px-3 py-1 text-sm bg-green-300 text-black ml-4 bg-[#10B981]  px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-[#10B981] shadow-md"
              >
                Download Resume
              </a>
              <a href="https://www.linkedin.com/in/sandeep-sarkar-cse/" className="text-sm/6 font-semibold text-charcoal">
                View LinkedIn Profile <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }