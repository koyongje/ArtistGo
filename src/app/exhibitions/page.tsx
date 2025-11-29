'use client';

import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

export default function ExhibitionsPage() {
  const [exhibitions, setExhibitions] = useState<any[]>([]);

  useEffect(() => {
    const fetchExhibitions = async () => {
      const { data } = await supabase.from('exhibitions').select('*').order('date', { ascending: false });
      setExhibitions(data || []);
    };
    fetchExhibitions();
  }, []);

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
              <span className="text-xl font-bold text-neutral-900 dark:text-white">{new Date(exhibition.date).getFullYear()}</span>
              <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">{exhibition.title}</h3>
            </div>
            
            <div className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm">
              <span className="font-semibold">{exhibition.role}</span>
              <span className="mx-2">•</span>
              <span>{exhibition.location}</span>
            </div>
            <div className="mt-1 text-neutral-500 dark:text-neutral-500 text-xs uppercase tracking-wide">
              {new Date(exhibition.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
