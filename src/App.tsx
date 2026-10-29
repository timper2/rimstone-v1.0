import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CoursePage from '@/components/CoursePage';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import TryOut from '@/pages/TryOut';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';
import { COURSES } from '@/data/courses';
import { useRouter } from '@/lib/useRouter';
import { applyPageMeta } from '@/lib/pageMeta';
import { useEffect } from 'react';

function App({ initialPath }: { initialPath?: string }) {
  const { route, navigate } = useRouter(initialPath);

  useEffect(() => {
    applyPageMeta(route);
  }, [route]);

  const renderPage = () => {
    switch (route) {
      case 'sidemount':
        return <CoursePage content={COURSES.sidemount} navigate={navigate} />;
      case 'cave':
        return <CoursePage content={COURSES.cave} navigate={navigate} />;
      case 'technical':
        return <CoursePage content={COURSES.technical} navigate={navigate} />;
      case 'rebreather':
        return <CoursePage content={COURSES.rebreather} navigate={navigate} />;
      case 'demo':
        return <TryOut navigate={navigate} />;
      case 'services':
        return <Services navigate={navigate} />;
      case 'contact':
        return <Contact />;
      case 'about':
        return <About />;
      case 'notfound':
        return <NotFound navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Navbar route={route} navigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
