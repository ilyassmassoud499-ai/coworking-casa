
import { useSelector } from "react-redux";
import revenuJ from "../assets/revenuJ.jpg"
import revenuT from "../assets/revenuT.jpg"
import bureau from "../assets/bureau-privee.jpg"
import reservation from "../assets/reservation.jpg"


const espaces = {
  "Bureau privé": 200,
  "Salle réunion A": 150,
  "Salle réunion B": 180,
  "Open Space": 50,
};

function Dashboard() {
  const reservations = useSelector(state => state.reservations.reservations);

  const today = new Date().toISOString().slice(0,10);
  const revenuJour = reservations.filter(r => r.date === today).reduce((acc,r)=>acc+r.montant,0);
  const revenuMois = reservations.reduce((acc,r)=>acc+r.montant,0);
  const tauxOccupation = {};
  Object.keys(espaces).forEach(e=>{
    const totalHeures = reservations.filter(r=>r.espace===e).reduce((acc,r)=>acc+r.duree,0);
    tauxOccupation[e] = `${Math.min(100, totalHeures * 10)}%`; 
  });
  const espacePlusReserve = Object.entries(tauxOccupation).sort((a,b)=>parseInt(b[1])-parseInt(a[1]))[0]?.[0] || "Aucun";

  return (
    <div  className="container mt-5">
      <h2>Dashboard</h2>
      <div className="row g-4 ">
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm h-100 border-0 ">
            <img src={revenuJ}  className="card-img-top"     />
            <div className="card-body">
              <h5 className="card-title">Revenu du jour</h5>
              <p className="card-text">{revenuJour} DH</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm h-100 border-0   ">
             <img src={revenuT}  className="card-img-top"     />
            <div className="card-body">
              <h5 className="card-title">Revenu total</h5>
              <p className="card-text">{revenuMois} DH</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm h-100 border-0  ">
            <img src={bureau} className="card-img-top"  />
            <div className="card-body">
              <h5 className="card-title">Espace le plus réservé</h5>
              <p className="card-text">{espacePlusReserve}</p>
            </div>
          </div>
        </div>
             <div className="col-md-3 mb-3">
          <div className="card shadow-sm h-100 border-0  ">
            <img src={reservation} className="card-img-top"  />
            <div className="card-body">
             <h5 className="card-title">Nombre total de réservations </h5>
             <p className="card-text">{reservations.length}</p>
              
            </div>
          </div>
        </div>
      </div>

      <h4 className="mt-4">Taux d'occupation par espace</h4>
      <ul className="list-group">
        {Object.entries(tauxOccupation).map(([e, t])=>(
          <li key={e} className="list-group-item d-flex justify-content-between align-items-center">
            {e}
            <span className="badge bg-primary rounded-pill">{t}</span>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Dashboard;
