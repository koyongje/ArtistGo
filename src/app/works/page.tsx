'use client';

import { useState } from 'react';
import WorkCard from '@/components/ui/WorkCard';

// Mock Data
const allWorks = [
  { id: '1', title: 'Abstract Composition I', category: 'Painting', year: 2024, imageUrl: 'https://placehold.co/600x800/222/fff?text=Abstract+I' },
  { id: '2', title: 'Urban Isolation', category: 'Photography', year: 2023, imageUrl: 'https://placehold.co/600x800/333/fff?text=Urban' },
  { id: '3', title: 'Neon Dreams', category: 'Installation', year: 2025, imageUrl: 'https://placehold.co/600x800/444/fff?text=Neon' },
  { id: '4', title: 'Digital Noise', category: 'Video', year: 2023, imageUrl: 'https://placehold.co/600x800/555/fff?text=Noise' },
  { id: '5', title: 'Silence in Blue', category: 'Painting', year: 2022, imageUrl: 'https://placehold.co/600x800/666/fff?text=Blue' },
  { id: '6', title: 'Structured Chaos', category: 'Sculpture', year: 2024, imageUrl: 'https://placehold.co/600x800/777/fff?text=Chaos' },
];

const categories = ['All', 'Painting', 'Photography', 'Installation', 'Video', 'Sculpture'];

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredWorks = activeFilter === 'All' 
    ? allWorks 
    : allWorks.filter(work => work.category === activeFilter);

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
            imageUrl={work.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
