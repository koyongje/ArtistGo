'use client';

import Image from 'next/image';
import { Download } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Profile Image */}
        <div className="relative aspect-[3/4] w-full md:w-4/5 mx-auto bg-neutral-200 dark:bg-neutral-800 rounded-sm overflow-hidden">
          <Image
            src="https://placehold.co/600x800/555/fff?text=Artist+Profile"
            alt="Artist Profile"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center h-full space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">About the Artist</h1>
            <div className="prose dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300 space-y-4">
              <p>
                Artist Name (b. 1990, Seoul) is a contemporary artist working across installation, video, and sculpture. 
                Their work investigates the subtle boundaries between organic and artificial life, questioning how technology 
                reshapes our perception of nature.
              </p>
              <p>
                Graduating from the Royal College of Art in 2018, they have exhibited internationally at galleries 
                and institutions including Tate Modern, Centre Pompidou, and MMCA Seoul.
              </p>
            </div>
          </div>

          {/* Statement */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Artist Statement</h2>
            <p className="italic text-neutral-600 dark:text-neutral-400 border-l-4 border-neutral-200 dark:border-neutral-700 pl-4">
              "My practice is an excavation of the digital debris that litters our collective consciousness. 
              By materializing the virtual, I attempt to give weight to the ephemeral."
            </p>
          </div>

          {/* CV Download */}
          <div className="pt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors rounded-sm">
              <Download size={18} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
