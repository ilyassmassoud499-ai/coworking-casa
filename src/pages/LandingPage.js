
import { useNavigate } from "react-router-dom";
import formulaireJs from "../assets/formulaireJs.jpg"

function LandingPage() {
  const navigate = useNavigate();
  const equipe = [
    { nom: "Ilyass Massoud"  },
    { nom: "Ayoub Msaad" },
  ];

  return (
       <div      style={{
       minHeight: "calc(100vh - 56px - 60px)",
        backgroundImage: `url(${formulaireJs})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width:"100%",
      }}>
    <div className="container text-center mt-5">
      <h1>Bienvenue à CoWork Casa</h1>
      <p >Réservations Espace Coworking est une application web moderne qui permet de réserver facilement des espaces de travail tels que des bureaux privés, salles de réunion et open space. Consultez les disponibilités en temps réel, gérez vos réservations et profitez d’une expérience simple, rapide et intuitive.</p>
      <button className="btn btn-primary mb-5" onClick={() => navigate("/accueil")}>
        Accéder à l'application
      </button>
      <h2 className="text-warning">Notre équipe</h2>
      <div className="row justify-content-center">
        {equipe.map(m => (
          <div key={m.nom} className="col-md-3 mb-3">
             
            <h4>{m.nom}</h4>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
