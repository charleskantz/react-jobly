import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/**
 *
 * @param {Function} signup: handles new user signup call to DB
 */
function Signup({ signup }) {

  const history = useHistory();
  const [ formData, setFormData ] = useState({
		username: "",
		password: "",
		first_name: "",
		last_name: "",
		email: "",
  });
  const [ formErrors, setFormErrors ] = useState([]);

  const handleSignup = async evt => {
    evt.preventDefault();
    let result = await signup(formData);
    if (result.login) {
      history.push("/companies");
    } else {
      setFormErrors(result.err);
    }
  };

  const handleChange = evt => {
		const { name, value } = evt.target;
		setFormData(data => ({ ...data, [name]: value }));
	};

  return (
    <div>
      <form className="SignUpForm" onSubmit={handleSignup}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            onChange={handleChange}
            name="username"
            placeholder="username"
            value={formData.username}
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            id="password"
          />
        </div>
        <div>
          <label htmlFor="first_name">First Name: </label>
          <input
            onChange={handleChange}
            name="first_name"
            placeholder="firstName"
            value={formData.first_name}
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name: </label>
          <input
            onChange={handleChange}
            name="last_name"
            placeholder="lastName"
            value={formData.last_name}
            id="lastName"
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            onChange={handleChange}
            name="email"
            placeholder="email"
            value={formData.email}
            id="email"
          />
        </div>

        {formErrors.length
          ? <p>{formErrors}</p>
          : null
        }

        <button id="addNewUser">Create Account</button>
      </form>
    </div>
  )
}

export default Signup;