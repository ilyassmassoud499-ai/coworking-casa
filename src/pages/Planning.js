
import { useSelector } from "react-redux";

const espaces = ["Bureau privé", "Salle réunion A", "Salle réunion B", "Open Space"];

function Planning() {
  const reservations = useSelector(state => state.reservations.reservations);
  const handleSubmit = e => {
    e.preventDefault();}

  return (
    <div className="container mt-5 bg-light ">
      <h2 className="text-warning">Planning Journalier</h2>
      {espaces.map(e => (
        <div key={e} className="mb-4 table-responsive " >
          <h4 >{e}</h4>
          < table  onSubmit={handleSubmit} className="table table-striped table-bordered ">
            <thead>
              <tr>
                <th>Date</th>
                <th>Début</th>
                <th>Fin</th>
                <th>Nom client</th>
              </tr>
            </thead>
            <tbody  >
              {reservations.filter(r => r.espace === e).sort((a,b)=>a.date.localeCompare(b.date)).map(r => (
                <tr  key={r.id}>
                  <td>{r.date}</td>
                  <td>{r.debut}</td>
                  <td>{r.fin}</td>
                  <td>{r.nom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Planning;
