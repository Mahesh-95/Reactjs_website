import React from 'react';
import './style.css';

export default function SignUp() {
  return (
    <div >
      <h1>SignUp</h1>
      <form className="form-contianer">
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" name="password" id="password" placeholder="Password"/>
        <input type="password" name="confirm password" id="" placeholder="Confirm Password"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}
