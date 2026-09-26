import { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BookingModal, PreloadedEstimateData } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { ServicesPage } from './pages/ServicesPage';
import { EstimatePage } from './pages/EstimatePage';
import { AreasPage } from './pages/AreasPage';
import { ResultsPage } from './pages/ResultsPage';
import { ContactPage } from './pages/ContactPage';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preloadedEstimate, setPreloadedEstimate] = useState<PreloadedEstimateData | null>(null);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleProceedToBooking = (data: PreloadedEstimateData) => {
    setPreloadedEstimate(data);
    setIsBookingOpen(true);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-900 selection:bg-amber-100 selection:text-amber-900">
        {/* Persistent Modern Navbar */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Multi-Page Route Switcher */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenBooking={handleOpenBooking}
                  onProceedToBooking={handleProceedToBooking}
                />
              }
            />
            <Route
              path="/story"
              element={<StoryPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/estimate"
              element={
                <EstimatePage
                  onProceedToBooking={handleProceedToBooking}
                  onOpenBooking={handleOpenBooking}
                />
              }
            />
            <Route
              path="/areas"
              element={<AreasPage onOpenBooking={handleOpenBooking} />}
            />
            <Route
              path="/results"
              element={<ResultsPage onOpenBooking={handleOpenBooking} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<ContactPage />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Modern Floating Quick Action Bar */}
        <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
          <a
            href="tel:14168259140"
            className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 bg-white text-slate-900 rounded-full shadow-lg border border-slate-200 text-xs font-semibold hover:bg-slate-50 transition-transform active:scale-95"
            aria-label="Call NC Cleanup directly"
          >
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span>(416) 825-9140</span>
          </a>

          <button
            onClick={handleOpenBooking}
            className="cursor-pointer flex items-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-full shadow-xl hover:bg-slate-800 transition-transform active:scale-95 text-xs font-bold"
            aria-label="Book In-Home Walkthrough"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Book Walkthrough</span>
          </button>
        </div>

        {/* Persistent Multi-Page Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* Global Walkthrough Scheduler Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          preloadedData={preloadedEstimate}
        />
      </div>
    </HashRouter>
  );
}
