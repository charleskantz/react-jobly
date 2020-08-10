import React, { useState, useContext } from "react";
import JoblyApi from "../api/JoblyApi";
import AuthContext from '../AuthContext';

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

  console.log('formData.password', formData.password);

  return (
    <div>
      <h1> Profile </h1>
      <form className="ProfileForm" onSubmit={submitUpdates}>
        <div>
          <label htmlFor="username">Username: </label>
          <input disabled
            name="username"
            placeholder="username"
            value={formData.username}
            id="username"
          />
        </div>
        <div>
          <label htmlFor="first_name">First Name: </label>
          <input
            onChange={handleChange}
            name="first_name"
            placeholder="first_name"
            value={formData.first_name}
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name: </label>
          <input
            onChange={handleChange}
            name="last_name"
            placeholder="last_name"
            id="lastName"
            value={formData.last_name}
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
        <div>
          <label htmlFor="photo_url">Photo URL: </label>
          <input
            onChange={handleChange}
            name="photo_url"
            placeholder="photoUrl"
            value={formData.photo_url}
            id="photoUrl"
          />
        </div>
        <div>
          <label htmlFor="password">Re-enter Password: </label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="password"
            value={formData.password}
            id="password"
          />
        </div>
        <button disabled={!formData.password} id="updateProfile">Save Changes</button>
      </form>
      <div id="messageArea" >{messages}</div>
    </div>
  );
}

export default Profile;
