import { Link } from "react-router-dom";

export default function ReservationCard({ r }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5>{r.espace}</h5>
        <p>{r.date} | {r.start} - {r.end}</p>
        <p>{r.client}</p>
        <Link className="btn btn-sm btn-primary" to={`/reservations/${r.id}`}>Détails</Link>
      </div>
    </div>
  );
}
