import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function UserForm() {
  const { addUser } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });

  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (phone) => {
    // Regex for phone number with country code (e.g., +91 9876543210)
    const phoneRegex = /^\+\d{1,3}\s\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError("Phone number must start with country code (e.g., +91 9876543210)");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validatePhone(form.phone)) {
      return;
    }

    const newUser = {
      ...form,
      id: Date.now(),
      company: { name: form.company }
    };
    addUser(newUser);
    setForm({ name: "", email: "", phone: "", company: "" });
    setPhoneError("");
  };

  return (
    <form onSubmit={handleSubmit} className="needs-validation">
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control custom-input"
              id="nameInput"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <label htmlFor="nameInput">Name</label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control custom-input"
              id="emailInput"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <label htmlFor="emailInput">Email</label>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="tel"
              className={`form-control custom-input ${phoneError ? 'is-invalid' : ''}`}
              id="phoneInput"
              placeholder="Phone"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <label htmlFor="phoneInput">Phone (e.g., +91 9876543210)</label>
            {phoneError && (
              <div className="invalid-feedback">
                {phoneError}
              </div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control custom-input"
              id="companyInput"
              placeholder="Company"
              required
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
            <label htmlFor="companyInput">Company</label>
          </div>
        </div>
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-success btn-lg">
          <i className="bi bi-person-plus-fill me-2"></i>
          Add User
        </button>
      </div>
    </form>
  );
}