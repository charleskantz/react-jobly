import React, { useState, useContext } from "react";
import JoblyApi from "../api/JoblyApi";
import AuthContext from '../AuthContext';
import { Card } from '../Common/Card';
import { Input } from '../Common/Input';
import { Button } from '../Common/Button';
import { Heading } from '../Common/Type';
import { Label } from '../Common/Label';
import styled from '@emotion/styled';

const Container = styled.div`
  margin-right: 16px;
`;

/** Profile - Form for updating the profile;
 *  requires a valid password;
 *  Username can not be updated;
 */
function Profile() {

  const { userInfo, setUserInfo } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    first_name: userInfo.first_name || "",
    last_name: userInfo.last_name || "",
    email: userInfo.email || "",
    photo_url: userInfo.photo_url || "",
    username: userInfo.username,
    password: "",
  });

  // DB response (error or success) is stored here
  const [messages, setMessages] = useState([])

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
      errors: []
    }));
  };

  const submitUpdates = async evt => {
    evt.preventDefault();

    let profileData = {
      username: formData.username,
      first_name: formData.first_name || undefined,
      last_name: formData.last_name || undefined,
      email: formData.email || undefined,
      photo_url: formData.photo_url || undefined,
      password: formData.password
    };

    let updatedUser;

    try {
      updatedUser = await JoblyApi.updateUser(profileData);
    }
    catch (err) {
      console.error(err);
      setMessages(err);
    }

    setFormData(formData => ({
      ...formData,
      password: ''
    }));
    setMessages("Update successful!")
    setUserInfo(updatedUser);
  }

  return (
    <Card column>
      <Heading>Profile</Heading>
      <Container>
        <form onSubmit={submitUpdates}>
          <Label htmlFor="username">Username: </Label>
          <Input disabled
            name="username"
            placeholder="username"
            value={formData.username}
            id="username"
          />
          <Label htmlFor="first_name">First Name: </Label>
          <Input
            onChange={handleChange}
            name="first_name"
            placeholder="first_name"
            value={formData.first_name}
            id="firstName"
          />
          <Label htmlFor="last_name">Last Name: </Label>
          <Input
            onChange={handleChange}
            name="last_name"
            placeholder="last_name"
            id="lastName"
            value={formData.last_name}
          />
          <Label htmlFor="email">Email: </Label>
          <Input
            onChange={handleChange}
            name="email"
            placeholder="email"
            value={formData.email}
            id="email"
          />
          <Label htmlFor="photo_url">Photo URL: </Label>
          <Input
            onChange={handleChange}
            name="photo_url"
            placeholder="photoUrl"
            value={formData.photo_url}
            id="photoUrl"
          />
          <Label htmlFor="password">Re-enter Password: </Label>
          <Input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="password"
            value={formData.password}
            id="password"
          />
          <Button margin="1rem 0 0" disabled={!formData.password} id="updateProfile">Save Changes</Button>
        </form>
      </Container>
      <div id="messageArea" >{messages}</div>
    </Card>
  );
}

export default Profile;
