'use client';
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function SplitWithCodeExample() {
  return (
    <div className="">
      <div className="relative isolate overflow-hidden bg-linear-to-b from-emerald-100/20">
        <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mt-24 sm:mt-32 lg:mt-16 hover:animate-bounce">
                </div>
                <div className="mt-10">
                  <a
                    href="#contact"
                    className="inline-flex space-x-6 transition duration-300 ease-in-out animate-pulse hover:scale-110 hover:opacity-80 font-bold text-white"
                  >
                    <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600 ">
                      <span>Open to opportunities</span>
                      <ChevronRight
                        className="size-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>
                <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-charcoal sm:text-7xl font-[var(--font-heading)] hover:shadow-text-glow">
                  Software Engineer & App Developer
                </h1>
                <TypeAnimation
                  sequence={[
                    "App Developer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "JavaScript Developer",
                    2000,
                    "C/C++",
                    2000,
                    "DataBase Designer",
                    2000,                    
                    "Figma",
                    2000,
                    "UI/UX Designer",
                    2000,
                    
                  ]}
                  wrapper="p"
                  speed={50}
                  className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 font-[var(--font-body)]"
                  repeat={Infinity}
                />
                {/* <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 font-[var(--font-body)]">
                  Building and Learning Apps and Websites. Passionate about
                  creating solutions that make a difference.
                </p> */}
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#contact"
                    className="inline-block px-6 py-3 text-white bg-[#10B981] hover:bg-[#10B981] transition rounded-full shadow-md hover:scale-105"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#"
                    className="text-link inline-flex items-center text-black hover:text-[#0f9f75] font-medium text-lg"
                  >
                    Download Resume <span aria-hidden="true">→</span>
                  </a>
                </div>
                
                {/* <p className="mt-8 text-sm text-gray-600 font-[var(--font-body)]">
                  2+ years of experience in learning full-stack development & 3+
                  years of experience in learning App development. Let's build
                  something amazing together.
                </p> */}
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-emerald-600/10 ring-emerald-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-emerald-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_var(--radius-3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-emerald-100 opacity-20 ring-1 ring-white ring-inset md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pr-0 md:pl-16">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400 font-[var(--font-body)]">
                          <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                            useAsyncData.ts
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            api.ts
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        <pre className="text-sm text-gray-300 font-mono">
                          <code>{`interface AsyncState<T> {
                                      data: T | null;
                                      loading: boolean;
                                       error: string | null;
                                  }

    export const useAsyncData = <T>(
    fetchFn: () => Promise<T>
    ): AsyncState<T> => {
    const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: true,
    error: null,
    });

   useEffect(() => {
    fetchFn()
      .then(data => setState({ 
        data, 
        loading: false, 
        error: null 
      }))
      .catch(error => setState({ 
        data: null, 
        loading: false, 
        error: error.message 
      }));
    }, []);

    return state;
   };`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
