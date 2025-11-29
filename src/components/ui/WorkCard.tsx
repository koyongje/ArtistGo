'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface WorkCardProps {
  id: string;
  title: string;
  year: number;
  images: string[];
  category: string;
}

export default function WorkCard({ id, title, year, images, category }: WorkCardProps) {
  return (
    <Link href={`/works/${id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-sm cursor-pointer"
      >
        <div className="relative aspect-[4/5] w-full bg-neutral-200 dark:bg-neutral-800">
             <Image
              src={images[0]}
              alt={title}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-80"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
        <div className="mt-2 flex justify-between items-end">
          <div>
            <h3 className="text-lg font-medium text-neutral-900 dark:text-white">{title}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{category}</p>
          </div>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">{year}</span>
        </div>
      </motion.div>
    </Link>
  );
}
