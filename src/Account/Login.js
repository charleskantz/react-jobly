import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "../Common/Card";
import { Label } from "../Common/Label";
import { Input } from "../Common/Input";
import { Heading, Body } from '../Common/Type';
import { Div } from '../Common/Div';
import { Button } from '../Common/Button';
import { StyledLink } from '../Common/StyledLink';

/** Login - Form for user to login
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
      history.push('/companies');
    } else {
      setFormErrors(result.err);
    }
  }


  return (
    <>
    <Card column>
      <Heading>
        Log In
      </Heading>
      <Div margin="0 16px 0 0">
        <form onSubmit={handleLogIn}>
          <Label htmlFor="username">Username: </Label>
          <Input
            onChange={handleChange}
            name="username"
            placeholder="username"
            value={formData.username}
            autoComplete="username"
          />
          <Label htmlFor="password">Password: </Label>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            autoComplete="current-password"
          />
          <Div margin="1rem 0 0" display="flex">
            <Button disabled={!formData.password} id="updateProfile">
              Save Changes
            </Button>
            <Div margin="0 0 0 1rem" display="flex" align="center">
              {formErrors}
            </Div>
          </Div>
        </form>
      </Div>
    </Card>
    <Div text="center">
      <Body>
        Don't have an account? <StyledLink to='/signup'>Sign up! </StyledLink>
      </Body>
    </Div>
    </>
  )
}

export default Login;