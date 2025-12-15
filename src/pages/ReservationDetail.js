import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ReservationDetail() {
  const { id } = useParams();
  const reservation = useSelector(state => state.reservations.reservations.find(r => r.id === parseInt(id)));

  if (!reservation) return <div className="container mt-5"><h3>Réservation non trouvée</h3></div>;

  return (
    <div className="container mt-5">
      <h2>Détail de la réservation</h2>
      <table className="table table-bordered">
        <tbody>
          <tr><th>Espace</th><td>{reservation.espace}</td></tr>
          <tr><th>Date</th><td>{reservation.date}</td></tr>
          <tr><th>Heure début</th><td>{reservation.debut}</td></tr>
          <tr><th>Heure fin</th><td>{reservation.fin}</td></tr>
          <tr><th>Nom client</th><td>{reservation.nom}</td></tr>
          <tr><th>Email</th><td>{reservation.email}</td></tr>
          <tr><th>Nombre de personnes</th><td>{reservation.personnes}</td></tr>
          <tr><th>Durée</th><td>{reservation.duree}h</td></tr>
          <tr><th>Montant</th><td>{reservation.montant} DH</td></tr>
          <tr><th>Statut</th><td>{reservation.statut}</td></tr>
        </tbody>
      </table>
      <Link to="/reservations" className="btn btn-secondary">Retour</Link>
    </div>
  );
}

export default ReservationDetail;
