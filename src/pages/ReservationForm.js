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

function ReservationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { reservations, currentReservation } = useSelector(
    state => state.reservations
  );

  const [form, setForm] = useState({
    id: null,
    espace: "",
    date: "",
    debut: "",
    fin: "",
    nom: "",
    email: "",
    personnes: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (currentReservation) {
      setForm(currentReservation);
    }
  }, [currentReservation]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const hasConflict = () => {
    return reservations.some(r => {
      if (
        r.id === form.id ||
        r.date !== form.date ||
        r.espace !== form.espace
      ) {
        return false;
      }

      const debut1 = Number(form.debut);
      const fin1 = Number(form.fin);
      const debut2 = Number(r.debut);
      const fin2 = Number(r.fin);

      return debut1 < fin2 && fin1 > debut2;
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError("");

    const debut = Number(form.debut);
    const fin = Number(form.fin);

    if (debut >= fin) {
      setError("L'heure de fin doit être supérieure à l'heure de début.");
      return;
    }

    if (hasConflict()) {
      setError("Conflit horaire : cet espace est déjà réservé à ce créneau.");
      return;
    }

    const duree = fin - debut;
    const montant = duree * espaces[form.espace];

    const data = {
      ...form,
      debut,
      fin,
      duree,
      montant,
      statut: "Confirmée",
    };

    if (currentReservation) {
      dispatch(updateReservation(data));
    } else {
      dispatch(addReservation({ ...data, id: Date.now() }));
    }

    navigate("/reservations");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${formulaireJs})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="d-flex align-items-center"
    >
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card shadow-lg p-4 p-md-5 rounded bg-light">
              <h2 className="text-center mb-4">
                {currentReservation ? "Modifier réservation" : "Ajouter réservation"}
              </h2>

              {error && (
                <div className="alert alert-danger text-center">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Espace</label>
                    <select
                      name="espace"
                      className="form-select"
                      value={form.espace}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionner un espace</option>
                      {Object.keys(espaces).map(e => (
                        <option key={e} value={e}>{e}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Date</label>
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Heure début</label>
                    <input
                      type="number"
                      name="debut"
                      className="form-control"
                      min="0"
                      max="23"
                      value={form.debut}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Heure fin</label>
                    <input
                      type="number"
                      name="fin"
                      className="form-control"
                      min="0"
                      max="23"
                      value={form.fin}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Nom du client</label>
                    <input
                      type="text"
                      name="nom"
                      className="form-control"
                      value={form.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email du client</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Nombre de personnes</label>
                    <input
                      type="number"
                      name="personnes"
                      className="form-control"
                      min="1"
                      value={form.personnes}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>

                <div className="mt-4 d-grid">
                  <button className="btn btn-primary btn-lg">
                    {currentReservation ? "Modifier" : "Ajouter"}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;