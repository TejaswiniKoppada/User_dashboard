import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function UserDetails() {
  const { id } = useParams();
  const { users } = useContext(UserContext);

  const user = users.find((u) => u.id.toString() === id);

  if (!user) return (
    <div className="container mt-4 px-3">
      <div className="alert alert-warning">
        <i className="bi bi-exclamation-triangle me-2"></i>
        User not found
      </div>
    </div>
  );

  return (
    <div className="min-vh-100 bg-light py-4">
      <div className="container px-3">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <Link 
              to="/" 
              className="btn btn-primary mb-4"
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Dashboard
            </Link>

            <div className="card shadow-sm border-0">
              <div className="card-body p-3 p-sm-4">
                <div className="text-center mb-4">
                  <div className="display-6 mb-3 text-primary">
                    <i className="bi bi-person-circle"></i>
                  </div>
                  <h1 className="h3 mb-4 text-primary text-break">{user.name}</h1>
                  <hr className="my-4" />
                </div>

                <div className="row g-4">
                  <div className="col-12 col-sm-6">
                    <div className="card h-100 bg-light border-0">
                      <div className="card-body">
                        <h5 className="card-title mb-3">
                          <i className="bi bi-info-circle me-2 text-primary"></i>
                          Contact Information
                        </h5>
                        <p className="mb-2 text-break"><strong>Email:</strong> {user.email}</p>
                        <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
                        <p className="mb-0 text-break"><strong>Website:</strong> {user.website}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6">
                    <div className="card h-100 bg-light border-0">
                      <div className="card-body">
                        <h5 className="card-title mb-3">
                          <i className="bi bi-building me-2 text-primary"></i>
                          Company Details
                        </h5>
                        <p className="mb-0 text-break"><strong>Company:</strong> {user.company?.name}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="card bg-light border-0">
                      <div className="card-body">
                        <h5 className="card-title mb-3">
                          <i className="bi bi-geo-alt me-2 text-primary"></i>
                          Address Information
                        </h5>
                        <div className="text-break">
                          <p className="mb-2">
                            <strong>Street:</strong> {user.address?.suite}, {user.address?.street}
                          </p>
                          <p className="mb-2">
                            <strong>City:</strong> {user.address?.city}
                          </p>
                          <p className="mb-2">
                            <strong>Zipcode:</strong> {user.address?.zipcode}
                          </p>
                          <p className="mb-0">
                            <strong>Geo-Location:</strong> {user.address?.geo?.lat}, {user.address?.geo?.lng}
                          </p>
                        </div>
                      </div>
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