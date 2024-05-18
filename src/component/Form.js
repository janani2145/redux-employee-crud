// Form.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from './Action';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Spinner from './Spinner';
import '../Spinner.css';

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');
  const[zip, setZip]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !employeeId || !dob || !gender || !phone || !department ||  !role || !address || !zip) {
      alert('Please fill in all fields');
      return;
    }
  

    setSpinner(true);

    dispatch(createTask({
      name,
      email,
      employeeId,
      dob,
      gender,
      phone,
      department,
      role,
      address,
      zip
    }))
    .then(() => {
      setSpinner(false);
      navigate('/list');
    })
    .catch((error) => {
      setSpinner(false);
      console.error('Error submitting data:', error);
    });

    // Clear form fields after submission
    setName('');
    setEmail('');
    setEmployeeId('');
    setDob('');
    setGender('');
    setPhone('');
    setDepartment('');
    setRole('');
    setAddress('');
    setZip('');
  };

  return (
    <>
      <section>
        {spinner && <Spinner />}
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <div className="input-box">
              <label>Full Name</label>
              <input type="text" placeholder="Enter full name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="input-box">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-box">
              <label>Employee ID</label>
              <input type="text" placeholder="Enter employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
            </div>
            <div className="input-box">
              <label>Date of Birth</label>
              <input type="date" placeholder="Enter birth date" value={dob} onChange={(e) => setDob(e.target.value)} required />
            </div>
            <div className="gender-box">
              <label>Gender</label>
              <div className="gender-option">
                <div className="gender">
                  <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} required />
                  <label htmlFor="check-male">Male</label>
                </div>
                <div className="gender">
                  <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} required />
                  <label htmlFor="check-female">Female</label>
                </div>
              </div>
            </div>
            <div className="input-box">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="input-box">
              <label>Department</label>
              <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
                <option value="">Select department</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
              </select>
            </div>
            {/* <div className="input-box">
              <label>Branch</label>
              <select value={branch} onChange={(e) => setBranch(e.target.value)} required>
                <option value="">Select branch</option>
                <option value="Branch A">Branch A</option>
                <option value="Branch B">Branch B</option>
              </select>
            </div> */}
            
            <div className="input-box">
              <label>Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="">Select role</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
            <div className="input-box">
              <label>Address</label>
              <textarea placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="input-box">
              <label>Zip Code</label>
              <input type="number" placeholder="Enter Zip Code" value={zip} onChange={(e) => setZip(e.target.value)} required />
            </div>
            <div className='btn'>
              <button type='submit'>Register</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Form;
