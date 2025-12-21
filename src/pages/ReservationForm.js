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

  const currentReservation = useSelector(
    state => state.reservations.currentReservation
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

  useEffect(() => {
    if (currentReservation) {
      setForm(currentReservation);
    }
  }, [currentReservation]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const duree = form.fin - form.debut;
    const montant = duree * espaces[form.espace];

    const data = {
      ...form,
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

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
               
                  <div className="col-12 col-md-6">
                    <label htmlFor="espace" className="form-label">Espace</label>
                    <select
                      name="espace"
                      id="espace"
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

            
                  <div className="col-12 col-md-6">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="form-control"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

               
                  <div className="col-12 col-md-6">
                    <label htmlFor="debut" className="form-label">Heure début </label>
                    <input
                      type="number"
                      name="debut"
                      id="debut"
                      className="form-control"
                      value={form.debut}
                      onChange={handleChange}
                      min="0"
                      max="23"
                      required
                    />
                  </div>

                 
                  <div className="col-12 col-md-6">
                    <label htmlFor="fin" className="form-label">Heure fin </label>
                    <input
                      type="number"
                      name="fin"
                      id="fin"
                      className="form-control"
                      value={form.fin}
                      onChange={handleChange}
                      min="0"
                      max="23"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="nom" className="form-label">Nom du client</label>
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      className="form-control"
                      value={form.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>

              
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">Email du client</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                
                  <div className="col-12 col-md-6">
                    <label htmlFor="personnes" className="form-label">Nombre de personnes</label>
                    <input
                      type="number"
                      name="personnes"
                      id="personnes"
                      className="form-control"
                      value={form.personnes}
                      min="1"
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
