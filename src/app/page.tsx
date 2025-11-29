'use client';

import Link from 'next/link';
import WorkCard from '@/components/ui/WorkCard';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

export default function Home() {
  const [featuredWorks, setFeaturedWorks] = useState<any[]>([]);

  useEffect(() => {
    const fetchFeaturedWorks = async () => {
      const { data } = await supabase
        .from('works')
        .select('*')
        .eq('featured', true);
      setFeaturedWorks(data || []);
    };
    fetchFeaturedWorks();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-neutral-50 dark:bg-neutral-900">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 dark:text-white">
          ARTIST NAME
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-8">
          Exploring the intersection of digital presence and physical reality through immersive installations.
        </p>
        <Link
          href="/works"
          className="px-8 py-3 border border-neutral-900 dark:border-white text-neutral-900 dark:text-white hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 transition-colors duration-300 uppercase tracking-widest text-sm"
        >
          View Works
        </Link>
      </section>

      {/* Featured Works Section */}
      <section className="w-full max-w-screen-xl mx-auto px-4 py-20">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold dark:text-white">Selected Works</h2>
          <Link href="/works" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white underline decoration-1 underline-offset-4">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWorks.map((work) => (
            <WorkCard
              key={work.id}
              id={work.id}
              title={work.title}
              year={work.year}
              category={work.category}
              images={work.images}
            />
          ))}
        </div>
      </section>
    </div>
  );
}