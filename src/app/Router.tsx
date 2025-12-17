import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { DifferentiationDetail } from './pages/DifferentiationDetail';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/differentiation" element={<DifferentiationDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;