import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteReservation,setCurrentReservation,} from "../redux/reservationsSlice";

function ReservationsList() {
  const reservations = useSelector(
    state => state.reservations?.reservations || []
  );

  const dispatch = useDispatch();

  return (
    <div className="container mt-5 table-responsive ">
      <h2>Liste des Réservations</h2>

      <Link
        to="/reservations/ajouter"
        className="btn btn-success mb-3"
        onClick={() => dispatch(setCurrentReservation(null))}
      >
        Ajouter une réservation
      </Link>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Espace</th>
            <th>Date</th>
            <th>Début</th>
            <th>Fin</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Personnes</th>
            <th>Durée</th>
            <th>Montant</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {reservations.map(r => (
            <tr key={r.id}>
              <td>{r.espace}</td>
              <td>{r.date}</td>
              <td>{r.debut}</td>
              <td>{r.fin}</td>
              <td>{r.nom}</td>
              <td>{r.email}</td>
              <td>{r.personnes}</td>
              <td>{r.duree}h</td>
              <td>{r.montant} DH</td>
              <td>{r.statut}</td>
              <td>
              
                <Link
                  to={`/reservations/${r.id}`}
                  className="btn btn-info btn-sm me-1"
                >
                  Voir
                </Link>

             
                <Link
                  to="/reservations/ajouter"
                  className="btn btn-warning btn-sm me-1"
                  onClick={() => dispatch(setCurrentReservation(r))}
                >
                  Modifier
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(deleteReservation(r.id))}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationsList;
