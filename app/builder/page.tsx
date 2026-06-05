import { Header } from '@/components/layout/Header';
import { EditorShell } from '@/components/builder/EditorShell';

export const metadata = {
  title: 'Resume Builder | Editor',
  description: 'Build your resume with our real-time editor.',
};

export default function BuilderPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50">
      <Header />
      <main className="flex-1 overflow-hidden">
        <EditorShell />
      </main>
    </div>
  );
}
