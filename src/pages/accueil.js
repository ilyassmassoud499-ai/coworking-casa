import { Link } from "react-router-dom";

import "./Accueil.css"

import image1 from "../assets/bureau-privee.jpg";
import image2 from "../assets/casa-coworking.jpg";
import image3 from "../assets/open-espace.jpg";
import image4 from "../assets/salle-reunionA.jpg";
import image5 from "../assets/salle-reunionB.jpg";

const espaces = [
  {
    titre: "Bureau privé",
    image: image1,
    prix: "200 DH/heure",
    description:
      "Espace fermé et calme, idéal pour le travail individuel ou les rendez-vous professionnels confidentiels.",
  },
  {
    titre: "Salle de réunion A",
    image: image4,
    prix: "150 DH/heure",
    description:
      "Salle de réunion fonctionnelle adaptée aux réunions d’équipe et aux présentations.",
  },
  {
    titre: "Salle de réunion B",
    image: image5,
    prix: "180 DH/heure",
    description:
      "Salle moderne et spacieuse conçue pour les réunions importantes et formations.",
  },
  {
    titre: "Open Space",
    image: image3,
    prix: "50 DH/heure",
    description:
      "Espace partagé dynamique et convivial pour freelances, étudiants et entrepreneurs.",
  },
];

const Accueil = () => {
  return (
    <div
      className="accueil-bg"

    >
      <div className="container py-5">
  
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-6 text-center">
            <img src={image2} className="img-fluid rounded" alt="coworking" />
          </div>

          <div className="col-12 col-md-6 text-center text-md-start">
            <h2 className="fw-bold">Bienvenue à CoWork Casa</h2>
            <p>Bureau, Open Space et Salle de Réunion.</p>
            <Link to="/reservations/ajouter" className="btn btn-primary">
              Réserver maintenant
            </Link>
          </div>
        </div>


        <h4 className="text-warning fw-bold mb-2">
          Un espace de travail flexible et adapté à vos besoins
        </h4>
        <p className="mb-4">
          Nos locations de bureaux sont disponibles à l'heure, à la journée ou
          selon vos besoins.
        </p>

    
        <div className="row g-4">
          {espaces.map((espace, index) => (
            <div className="col-sm-6 col-md-3" key={index}>
              <div className="card h-100 shadow-sm espace-card">
                <img
                  src={espace.image}
                  className="card-img-top"
                  alt={espace.titre}
                />

                <div className="card-body d-flex flex-column text-center">
                  <h5 className="fw-bold">{espace.titre}</h5>
                  <p className="card-text">{espace.description}</p>

                  <div className="mt-auto">
                    <h6 className="text-warning fw-bold mb-3">
                      {espace.prix}
                    </h6>
                    <Link
                      to="/reservations/ajouter"
                      className="btn btn-primary btn-sm w-100"
                    >
                      Aller pour réserver maintenant
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
     
      </div>
    </div>
  );
};

export default Accueil;