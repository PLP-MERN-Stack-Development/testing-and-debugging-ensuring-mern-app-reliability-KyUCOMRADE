export default function UserCard({ user }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="font-semibold">{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}
