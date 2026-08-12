import { useRouter } from './lib/router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Solutions } from './pages/Solutions';
import { Industries } from './pages/Industries';
import { InnovationLab } from './pages/InnovationLab';
import { Contact } from './pages/Contact';

function App() {
  const { route, navigate } = useRouter();

  const page = () => {
    switch (route) {
      case '/about':
        return <About navigate={navigate} />;
      case '/solutions':
        return <Solutions navigate={navigate} />;
      case '/industries':
        return <Industries navigate={navigate} />;
      case '/innovation-lab':
        return <InnovationLab navigate={navigate} />;
      case '/contact':
        return <Contact />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar route={route} navigate={navigate} />
      <main>{page()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
