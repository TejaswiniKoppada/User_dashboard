import { useContext, useState } from "react";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
import { UserContext } from "../context/UserContext";

export default function Dashboard() {
  const { users, deleteUser } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-vh-100 bg-light">
      {/* Simple Navigation Bar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            <i className="bi bi-people-fill me-2"></i>
            User Management Dashboard
          </span>
        </div>
      </nav>

      <div className="container px-3 px-sm-4">
        {/* Search and Create User Section */}
        <div className="row gy-3 my-4">
          <div className="col-12 col-md-6">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search text-primary"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 text-md-end">
            <button
              className="btn btn-success w-100 w-md-auto"
              onClick={() => setShowForm(!showForm)}
            >
              <i className="bi bi-plus-circle me-2"></i>
              {showForm ? 'Close Form' : 'Create a New User'}
            </button>
          </div>
        </div>

        {/* User Form */}
        {showForm && (
          <div className="row mb-4">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-light border-0 py-3">
                  <h5 className="mb-0">
                    <i className="bi bi-person-plus-fill me-2 text-success"></i>
                    Create New User
                  </h5>
                </div>
                <div className="card-body p-3 p-sm-4">
                  <UserForm />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Uniform Cards Grid */}
        <div className="row g-3">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="col-12 col-sm-6 col-lg-4 d-flex">
                <UserCard
                  user={user}
                  onDelete={() => deleteUser(user.id)}
                />
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-info text-center py-4">
                <i className="bi bi-info-circle me-2"></i>
                No users found matching your search.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}