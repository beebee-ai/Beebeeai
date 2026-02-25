import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { DifferentiationDetail } from './pages/DifferentiationDetail';
import Certificate from './pages/Certificate';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/differentiation" element={<DifferentiationDetail />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;