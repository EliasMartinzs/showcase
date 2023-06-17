import Filters from '@/components/Filters';
import Showcase from '@/components/Showcase';

export default function Home() {
  return (
    <main className="mt-24">
      <Showcase />
      <Filters />
    </main>
  );
}
