import WorkDetailClient from './WorkDetailClient';

// Mock Data (Same as WorksPage for consistency)
const allWorks = [
  { 
    id: '1', 
    title: 'Abstract Composition I', 
    category: 'Painting', 
    year: 2024, 
    imageUrl: 'https://placehold.co/600x800/222/fff?text=Abstract+I',
    description: 'A study of form and void, exploring the tension between structured geometry and organic chaos. Acrylic on canvas, 150x200cm.' 
  },
  { 
    id: '2', 
    title: 'Urban Isolation', 
    category: 'Photography', 
    year: 2023, 
    imageUrl: 'https://placehold.co/600x800/333/fff?text=Urban',
    description: 'Captured during the lockdown, this series documents the empty spaces of a metropolis in pause. Digital Print.' 
  },
  { 
    id: '3', 
    title: 'Neon Dreams', 
    category: 'Installation', 
    year: 2025, 
    imageUrl: 'https://placehold.co/600x800/444/fff?text=Neon',
    description: 'Light installation using recycled neon tubes and industrial glass. A comment on consumerism and decay.' 
  },
  { 
    id: '4', 
    title: 'Digital Noise', 
    category: 'Video', 
    year: 2023, 
    imageUrl: 'https://placehold.co/600x800/555/fff?text=Noise',
    description: 'Single-channel video loop, 14min. Examining the interference patterns of modern communication.' 
  },
  { 
    id: '5', 
    title: 'Silence in Blue', 
    category: 'Painting', 
    year: 2022, 
    imageUrl: 'https://placehold.co/600x800/666/fff?text=Blue',
    description: 'Monochromatic exploration of color depth and emotional resonance. Oil on linen.' 
  },
  { 
    id: '6', 
    title: 'Structured Chaos', 
    category: 'Sculpture', 
    year: 2024, 
    imageUrl: 'https://placehold.co/600x800/777/fff?text=Chaos',
    description: 'Steel and concrete sculpture. 200x100x100cm.' 
  },
];

export async function generateStaticParams() {
  return allWorks.map((work) => ({
    id: work.id,
  }));
}

export default function WorkDetailPage({ params }: { params: { id: string } }) {
  const work = allWorks.find((w) => w.id === params.id);

  return <WorkDetailClient work={work} />;
}
