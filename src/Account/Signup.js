import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from "../Common/Card";
import { Label } from "../Common/Label";
import { Input } from "../Common/Input";
import { Heading, LightMiceType } from '../Common/Type';
import { Div } from '../Common/Div';
import { Button } from '../Common/Button';

/**
 *
 * @param {Function} signup: handles new user signup call to DB
 */
function Signup({ signup }) {

  const history = useHistory();
  const [ formData, setFormData ] = useState({
		username: "",
		password: "",
		email: "",
		first_name: "",
		last_name: "",
	  photo_url: "",
  });
  const [ formErrors, setFormErrors ] = useState([]);

  const handleSignup = async evt => {
    evt.preventDefault();
    let result = await signup(formData);
    if (result.login) {
      history.push("/companies");
    } else {
      console.log("err", result.err)
      setFormErrors(result.err);
    }
  };

  const handleChange = evt => {
		const { name, value } = evt.target;
		setFormData(data => ({ ...data, [name]: value }));
  };

  const submitButtonActive = formData.username && formData.password;

  return (
    <Card column>
      <Heading>
        Sign Up
      </Heading>
      <LightMiceType>Fields with * are required.</LightMiceType>
      <Div margin="0 16px 0 0">
        <form onSubmit={handleSignup}>
          <Label htmlFor="username">Username*</Label>
          <Input
            onChange={handleChange}
            name="username"
            value={formData.username}
            autoComplete="username"
          />
          <Label htmlFor="password">Password*</Label>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            value={formData.password}
            autoComplete="new-password"
          />
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={handleChange}
            name="email"
            value={formData.email}
            autoComplete="email"
          />
          <Label htmlFor="first_name">First Name</Label>
          <Input
            onChange={handleChange}
            name="first_name"
            value={formData.first_name}
            autoComplete="given-name"
          />
          <Label htmlFor="last_name">Last Name</Label>
          <Input
            onChange={handleChange}
            name="last_name"
            value={formData.last_name}
            autoComplete="family-name"
          />
          <Label htmlFor="photo_url">URL for Photo</Label>
          <Input
            onChange={handleChange}
            name="photo_url"
            value={formData.photo_url}
            autoComplete="photo"
          />
          <Div margin="1rem 0 0" display="flex">
            <Button disabled={!submitButtonActive}>
              Sign Up
            </Button>
            <Div margin="0 0 0 1rem" display="flex" align="center">
              {formErrors}
            </Div>
          </Div>
        </form>
      </Div>
    </Card>
  )
}

export default Signup;