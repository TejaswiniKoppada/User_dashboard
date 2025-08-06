import { useNavigate } from "react-router-dom";

export default function UserCard({ user, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card shadow-sm hover-shadow w-100">
      <div className="card-body d-flex flex-column p-3 p-sm-4">
        <div className="mb-3">
          <h5 className="card-title text-primary text-break mb-2">{user.name}</h5>
          <span className="badge bg-light text-primary border border-primary">User</span>
        </div>
        
        <div className="flex-grow-1">
          <ul className="list-unstyled mb-4">
            <li className="mb-2 text-break">
              <i className="bi bi-envelope me-2 text-primary"></i>
              {user.email}
            </li>
            <li className="mb-2">
              <i className="bi bi-telephone me-2 text-primary"></i>
              {user.phone}
            </li>
            <li className="text-break">
              <i className="bi bi-building me-2 text-primary"></i>
              {user.company?.name}
            </li>
          </ul>
        </div>

        <div className="d-flex gap-2 mt-auto">
          <button
            onClick={() => navigate(`/user/${user.id}`)}
            className="btn btn-primary flex-grow-1"
            style={{ 
              backgroundColor: '#0d6efd',
              borderColor: '#0d6efd',
              minWidth: '100px'
            }}
          >
            <i className="bi bi-eye me-1"></i>
            View
          </button>
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this user?")) {
                onDelete();
              }
            }}
            className="btn btn-danger flex-grow-1"
            style={{
              backgroundColor: '#dc3545',
              borderColor: '#dc3545',
              minWidth: '100px'
            }}
          >
            <i className="bi bi-trash me-1"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}