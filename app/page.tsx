import { SnapUrlContainer } from '@/components/snap-url-container';


export default function Home() {
  return (
    <main className="mx-auto max-w-xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Snap URL</h1>
        <p className="md:text-lg">Acorta URL de manera rápida y sencilla.</p>
      </div>
      <SnapUrlContainer />
    </main>
  );
}
