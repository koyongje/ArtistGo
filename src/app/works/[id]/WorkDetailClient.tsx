'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

// This is a client component that displays the work details.
export default function WorkDetailClient({ work }: { work: any }) {
  const router = useRouter();

  if (!work) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold mb-4">Work not found</h2>
        <button 
          onClick={() => router.back()}
          className="text-neutral-500 hover:text-neutral-900 underline"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <button 
        onClick={() => router.back()}
        className="flex items-center text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 w-4 h-4" /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="grid grid-cols-1 gap-4">
          {work.images.map((image: string, index: number) => (
            <div key={index} className="relative aspect-[4/5] w-full bg-neutral-100 dark:bg-neutral-900 rounded-sm overflow-hidden">
              <Image
                src={image}
                alt={`${work.title} - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 dark:text-white">{work.title}</h1>
          <div className="flex items-center space-x-4 text-neutral-500 dark:text-neutral-400 mb-8">
            <span>{work.category}</span>
            <span>•</span>
            <span>{work.year}</span>
          </div>

          <div className="prose dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300">
            <p>{work.description}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Additional Details (Mock) */}
          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Dimensions</dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-white">Variable</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Location</dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-white">Private Collection</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
