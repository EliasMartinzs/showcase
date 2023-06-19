import Filters from '@/components/Filters';
import Showcase from '@/components/Showcase';
import Cars from '@/components/Cars';

export default function Home() {
  return (
    <main className="mt-24">
      <Showcase />
      <Filters />
      <Cars />
    </main>
  );
}
