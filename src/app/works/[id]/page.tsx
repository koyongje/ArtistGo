import WorkDetailClient from './WorkDetailClient';
import { supabase } from '@/lib/supabase';

export async function generateStaticParams() {
  const { data: works } = await supabase.from('works').select('id');
  return works?.map((work) => ({
    id: work.id,
  })) || [];
}

export default async function WorkDetailPage({ params }: { params: { id: string } }) {
  const { data: work } = await supabase
    .from('works')
    .select('*')
    .eq('id', params.id)
    .single();

  return <WorkDetailClient work={work} />;
}
