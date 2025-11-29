'use client';

import { useState, useEffect } from 'react';
import WorkCard from '@/components/ui/WorkCard';
import { supabase } from '@/lib/supabase';

const categories = ['All', 'Painting', 'Photography', 'Installation', 'Video', 'Sculpture'];

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [works, setWorks] = useState<any[]>([]);

  useEffect(() => {
    const fetchWorks = async () => {
      const { data } = await supabase.from('works').select('*');
      setWorks(data || []);
    };
    fetchWorks();
  }, []);

  const filteredWorks = activeFilter === 'All' 
    ? works 
    : works.filter(work => work.category === activeFilter);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">Selected Works</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              activeFilter === cat
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredWorks.map((work) => (
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
    </div>
  );
}
