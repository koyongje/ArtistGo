'use client';

import { motion } from 'framer-motion';

const exhibitions = [
  {
    id: 1,
    year: 2025,
    title: 'Future Landscapes',
    role: 'Solo Exhibition',
    location: 'Gallery Artifact, Seoul',
    date: 'Mar 10 - Apr 20, 2025',
  },
  {
    id: 2,
    year: 2024,
    title: 'Digital Frontiers',
    role: 'Group Exhibition',
    location: 'MoMA PS1, New York',
    date: 'Nov 05 - Dec 15, 2024',
  },
  {
    id: 3,
    year: 2024,
    title: 'Biennale of Light',
    role: 'Participant',
    location: 'Venice, Italy',
    date: 'Jun 01 - Sep 30, 2024',
  },
  {
    id: 4,
    year: 2023,
    title: 'Echoes of Silence',
    role: 'Solo Exhibition',
    location: 'Space K, Seoul',
    date: 'Sep 10 - Oct 25, 2023',
  },
  {
    id: 5,
    year: 2022,
    title: 'Emerging Voices',
    role: 'Group Exhibition',
    location: 'Saatchi Gallery, London',
    date: 'Jan 15 - Feb 28, 2022',
  },
];

export default function ExhibitionsPage() {
  return (
    <div className="max-w-screen-md mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 dark:text-white">Exhibitions</h1>

      <div className="border-l border-neutral-200 dark:border-neutral-800 ml-4">
        {exhibitions.map((exhibition, index) => (
          <motion.div
            key={exhibition.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 last:pb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-neutral-900 dark:bg-white border-2 border-white dark:border-neutral-950" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
              <span className="text-xl font-bold text-neutral-900 dark:text-white">{exhibition.year}</span>
              <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">{exhibition.title}</h3>
            </div>
            
            <div className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm">
              <span className="font-semibold">{exhibition.role}</span>
              <span className="mx-2">•</span>
              <span>{exhibition.location}</span>
            </div>
            <div className="mt-1 text-neutral-500 dark:text-neutral-500 text-xs uppercase tracking-wide">
              {exhibition.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
