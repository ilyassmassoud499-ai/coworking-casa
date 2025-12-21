import { Link } from "react-router-dom";
import transparent from "../assets/transparent.jpg"

import image1 from "../assets/bureau-privee.jpg" 
import image2 from "../assets/casa-coworking.jpg" 
import image3 from "../assets/open-espace.jpg" 
import image4 from "../assets/salle-reunionA.jpg" 
import image5 from "../assets/salle-reunionB.jpg" 


const Accueil = () => {
    return ( 
        <div  style={{
        minHeight: "calc(100vh - 56px - 60px)",
        backgroundImage: `url(${transparent})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      
       
      }}>
        
        
    <div className="container py-5">
        <div className="row align-items-center ">
              <div className="col-12 col-md-6 text-center">
           
                <img src={image2} className="img-fluid"     alt=""  />
                </div>

           
            <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
                <h2 className="text-dark">Bienvenue à CoWork Casa Reserver votre espace coworking facilement</h2>
                <p>Bureau, Open Space et Salle de Reunion.</p>
               <Link to="/reservations/ajouter"> <button className="btn btn-primary">Reserver maintenant</button></Link>
            
            </div>
            
          

            </div>
          

                   <br/>
                   <br/>
        
            
            <div className="container ">
                <h4 className="text-warning">Un espace de travail flexible et adapté à vos besoins</h4>
                <br/>
            
                <p>Nos locations de bureaux flexibles et entièrement personnalisables sont disponibles à l'heure, à la journée ou aussi longtemps que vous le souhaitez.</p>
                <div className=" my-5 text-center  ">
                    <div className="row g-4">

                      <div className="col-md-3">
  <div className="card h-100 shadow-sm">
    <img
      src={image1}
      className="card-img-top"
      style={{ height: "180px", objectFit: "cover" }}
      alt=""
    />

    <div className="card-body d-flex flex-column text-center">
      <h5 className="card-title">Bureau privé</h5>

      <p className="card-text">
     Espace fermé et calme, idéal pour le travail individuel ou les rendez-vous professionnels confidentiels. Le bureau privé offre un environnement confortable favorisant la concentration, avec mobilier ergonomique, connexion internet haut débit et confidentialité totale.
      </p>

      <h6 className="text-warning">200 DH/heure</h6>

      <div className="mt-auto">
        <Link to="/reservations/ajouter" className="btn btn-primary btn-sm w-100">
          Aller pour réserver maintenant
        </Link>
      </div>
    </div>
  </div>
</div>

                 
        <div className="col-md-3">
  <div className="card h-100 shadow-sm">
    <img
    src={image4}
      className="card-img-top"
      style={{ height: "180px", objectFit: "cover" }}
      alt=""
    />

    <div className="card-body d-flex flex-column text-center">
      <h5 className="card-title">Salle de réunion A</h5>

      <p className="card-text">
Salle de réunion fonctionnelle, adaptée aux réunions d’équipe, présentations ou sessions de travail collaboratif. Elle est équipée d’une table de réunion, de chaises confortables et d’un accès internet fiable, parfaite pour des échanges productifs en petit groupe.      </p>

      <h6 className="text-warning">150 DH/heure</h6>

      <div className="mt-auto">
        <Link to="/reservations/ajouter" className="btn btn-primary btn-sm w-100">
          Aller pour réserver maintenant
        </Link>
      </div>
    </div>
  </div>
</div>
        <div className="col-md-3">
  <div className="card h-100 shadow-sm">
    <img
      src={image5}
      className="card-img-top"
      style={{ height: "180px", objectFit: "cover" }}
      alt=""
    />

    <div className="card-body d-flex flex-column text-center">
      <h5 className="card-title">Salle de réunion B</h5>

      <p className="card-text">
Salle de réunion moderne et spacieuse, conçue pour les réunions importantes, formations ou présentations professionnelles. Elle propose un cadre plus premium avec un meilleur confort, un aménagement optimisé et des équipements adaptés aux réunions formelles.</p>
      <h6 className="text-warning">180 DH/heure</h6>

      <div className="mt-auto">
        <Link to="/reservations/ajouter" className="btn btn-primary btn-sm w-100">
          Aller pour réserver maintenant
        </Link>
      </div>
    </div>
  </div>
</div>
        <div className="col-md-3">
  <div className="card h-100 shadow-sm">
    <img
      src={image3}
      className="card-img-top"
      style={{ height: "180px", objectFit: "cover" }}
      alt=""
    />

    <div className="card-body d-flex flex-column text-center">
      <h5 className="card-title">Open Space</h5>

      <p className="card-text">
        Espace de travail partagé, dynamique et convivial, idéal pour les freelances, étudiants et entrepreneurs. L’open space favorise les échanges et la collaboration tout en offrant un accès internet rapide et un environnement motivant à moindre coût.
</p>
      <h6 className="text-warning">50 DH/heure</h6>

      <div className="mt-auto">
        <Link to="/reservations/ajouter" className="btn btn-primary btn-sm w-100">
          Aller pour réserver maintenant
        </Link>
      </div>
    </div>
  </div>
</div>

                  
                       

                    
                    </div>
                    

                </div>
                

            </div>
            

        </div>
        </div>
        

       
     );
}
 
export default Accueil;