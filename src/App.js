import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Accueil from "./pages/accueil";
import Planning from "./pages/Planning";
import ReservationsList from "./pages/ReservationsList";
import ReservationDetail from "./pages/ReservationDetail";
import ReservationForm from "./pages/ReservationForm";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 ">

        <Navbar />

       <main className="flex-grow-1">

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/reservations" element={<ReservationsList />} />
            <Route path="/reservations/ajouter" element={<ReservationForm />} />
            <Route path="/reservations/:id" element={<ReservationDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
