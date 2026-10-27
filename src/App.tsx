import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CoursePage from '@/components/CoursePage';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import TryOut from '@/pages/TryOut';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import { COURSES } from '@/data/courses';
import { useRouter } from '@/lib/useRouter';

function App() {
  const { route, navigate } = useRouter();

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
