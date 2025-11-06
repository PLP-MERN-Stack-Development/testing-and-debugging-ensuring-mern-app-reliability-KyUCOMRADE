import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Users Dashboard</h1>
        <button className="btn add-user">Add New User</button>
      </header>

      <section className="users-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>chege</td>
              <td>chegejoseph5006@gmail.com</td>
            </tr>
            {/* More users */}
          </tbody>
        </table>
      </section>
    </div>
  );
}
