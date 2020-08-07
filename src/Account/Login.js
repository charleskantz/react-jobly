import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/** Sign Up Form for adding a new user */

function Login({ login }) {
  // set history state for potential redirect
  let history = useHistory();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  // handle changes in form to keep React happy
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  // log in the user, update token, redirect to Jobs page
  const handleLogIn = async evt => {
    evt.preventDefault();
    let result = await login(formData);
    if (result.login) {
      console.log('yuppp')
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