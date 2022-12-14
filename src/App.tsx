import Translator from './components/Translator';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="grid min-h-screen place-items-center bg-gradient-to-br from-green-900 to-green-400">
      <Translator />
      <Toaster />
    </div>
  );
}
