import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReservation, updateReservation } from "../redux/reservationsSlice";
import { useNavigate } from "react-router-dom";
import formulaireJs from "../assets/formulaireJs.jpg";

const espaces = {
  "Bureau privé": 200,
  "Salle réunion A": 150,
  "Salle réunion B": 180,
  "Open Space": 50,
};

function ReservationForm({ reservation }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reservations = useSelector(
    state => state.reservations?.reservations || []
  );

  const [form, setForm] = useState({
    espace: "",
    date: "",
    debut: "",
    fin: "",
    nom: "",
    email: "",
    personnes: 1,
  });

  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (reservation) setForm(reservation);
  }, [reservation]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const checkOverlap = () => {
    return reservations.some(r =>
      r.id !== form.id &&
      r.espace === form.espace &&
      r.date === form.date &&
      (
        (form.debut >= r.debut && form.debut < r.fin) ||
        (form.fin > r.debut && form.fin <= r.fin)
      )
    );
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!form.espace || !form.date || !form.debut || !form.fin || !form.nom || !form.email || !form.personnes) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    if (checkOverlap()) {
      alert("Cette plage horaire est déjà réservée !");
      return;
    }

    const duree = parseInt(form.fin) - parseInt(form.debut);
    const montant = duree * espaces[form.espace];

    const data = { ...form, duree, montant, statut: "Confirmée" };

    if (reservation) {
      dispatch(updateReservation(data));
      setSuccess("Réservation modifiée avec succès !");
    } else {
      dispatch(addReservation({ ...data, id: Date.now() }));
      setSuccess("Réservation ajoutée avec succès !");
    }

    setTimeout(() => {
      navigate("/reservations");
    }, 1500);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${formulaireJs})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div className="container w-50 bg-light rounded shadow-2 mt-5 p-4">
        <h2 className="text-success text-center mb-3">
          {reservation ? "Modifier la réservation" : "Ajouter une réservation"}
        </h2>

        {success && (
          <div className="alert alert-success text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <select name="espace" className="form-select mb-3" value={form.espace} onChange={handleChange} required>
            <option value="">Sélectionner un espace</option>
            {Object.keys(espaces).map(e => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>

          <input type="date" name="date" className="form-control mb-3" value={form.date} onChange={handleChange} required />
          <input type="number" name="debut" placeholder="Heure début (0-23)" className="form-control mb-3" value={form.debut} onChange={handleChange} required />
          <input type="number" name="fin" placeholder="Heure fin (0-23)" className="form-control mb-3" value={form.fin} onChange={handleChange} required />
          <input type="text" name="nom" placeholder="Nom client" className="form-control mb-3" value={form.nom} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email client" className="form-control mb-3" value={form.email} onChange={handleChange} required />
          <input type="number" name="personnes" placeholder="Nombre de personnes" className="form-control mb-3" value={form.personnes} onChange={handleChange} min="1" required />

          <button type="submit" className="btn btn-primary w-100">
            {reservation ? "Modifier" : "Ajouter"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
