import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/** Login - Form for user to login
 *
 * @param {login} prop: handles call DB to attempt login
 */
function Login({ login }) {
  // set history state for potential redirect
  let history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  // for any potential login error
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  // log in the user, update token, redirect to Jobs page, or display login error
  const handleLogIn = async evt => {
    evt.preventDefault();
    let result = await login(formData);
    if (result.login) {
      history.push('/jobs');
    } else {
      setFormErrors(result.err);
    }
  }


  return (
    <div>
      <form className="SignUpForm" onSubmit={handleLogIn}>
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

        {formErrors.length
          ? <p>{formErrors}</p>
          : null}

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login;