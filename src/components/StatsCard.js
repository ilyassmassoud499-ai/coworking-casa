export default function StatsCard({ title, value }) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h6>{title}</h6>
        <h3>{value}</h3>
      </div>
    </div>
  );
}