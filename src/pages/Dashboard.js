import { useSelector } from "react-redux";
import "./Dashboard.css";

import revenuT from "../assets/revenuT.jpg";
import bureau from "../assets/bureau-privee.jpg";
import reservation from "../assets/reservation.jpg";

const espaces = {
  "Bureau privé": 200,
  "Salle réunion A": 150,
  "Salle réunion B": 180,
  "Open Space": 50,
};

function Dashboard() {
  const reservations = useSelector(
    (state) => state.reservations.reservations
  );

  const today = new Date().toISOString().slice(0, 10);

  const revenuJour = reservations
    .filter((r) => r.date === today)
    .reduce((acc, r) => acc + r.montant, 0);

  const revenuTotal = reservations.reduce(
    (acc, r) => acc + r.montant,
    0
  );

  const tauxOccupation = {};
  Object.keys(espaces).forEach((e) => {
    const totalHeures = reservations
      .filter((r) => r.espace === e)
      .reduce((acc, r) => acc + r.duree, 0);

    tauxOccupation[e] = `${Math.min(100, totalHeures * 10)}%`;
  });

  const espacePlusReserve =
    Object.entries(tauxOccupation)
      .sort((a, b) => parseInt(b[1]) - parseInt(a[1]))[0]?.[0] ||
    "Aucun";

  return (
    <div className="css">
      
    <div className="container my-5">
      <h2 className="mb-4 fw-bold">Dashboard</h2>

      <div className="row g-4">
    
        <div className="col-md-4">
          <div className="card dashboard-card h-100">
            <div className="card-img-wrapper">
              <img src={revenuT} alt="revenu" />
            </div>
            <div className="card-body text-center">
              <h5>Revenu total</h5>
              <p className="fw-bold text-success fs-5">
                {revenuTotal} DH
              </p>
            </div>
          </div>
        </div>

       
        <div className="col-md-4">
          <div className="card dashboard-card h-100">
            <div className="card-img-wrapper">
              <img src={bureau} alt="espace" />
            </div>
            <div className="card-body text-center">
              <h5>Espace le plus réservé</h5>
              <p className="fw-bold text-primary">
                {espacePlusReserve}
              </p>
            </div>
          </div>
        </div>

      
        <div className="col-md-4">
          <div className="card dashboard-card h-100">
            <div className="card-img-wrapper">
              <img src={reservation} alt="reservation" />
            </div>
            <div className="card-body text-center">
              <h5>Nombre total de réservations</h5>
              <p className="fw-bold fs-5">
                {reservations.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <h4 className="mt-5 mb-3">Taux d'occupation par espace</h4>

      <ul className="list-group shadow-sm">
        {Object.entries(tauxOccupation).map(([e, t]) => (
          <li
            key={e}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {e}
            <span className="badge bg-primary rounded-pill">
              {t}
            </span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Dashboard;
