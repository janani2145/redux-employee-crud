import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from './Action';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
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
  const [zip, setZip] = useState('');
  const [errors, setErrors] = useState({});

  const handleDateChange = (e) => {
    setDob(e.target.value);
    if (e.target.value) {
      e.target.classList.add('filled');
    } else {
      e.target.classList.remove('filled');
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = {};

    if (!name.match(/^[A-Za-z\s]{3,}$/)) {
      valid = false;
      newErrors.name = 'Name must be at least 3 characters long and contain only letters and spaces.';
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      valid = false;
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!employeeId.match(/^[A-Za-z0-9]+$/)) {
      valid = false;
      newErrors.employeeId = 'Employee ID must contain only letters and numbers.';
    }

    if (!dob) {
      valid = false;
      newErrors.dob = 'Please enter a valid date of birth.';
    }

    if (!gender) {
      valid = false;
      newErrors.gender = 'Please select a gender.';
    }

    if (!phone.match(/^\d{10}$/)) {
      valid = false;
      newErrors.phone = 'Phone number must be 10 digits long.';
    }

    if (!department) {
      valid = false;
      newErrors.department = 'Please select a department.';
    }

    if (!role) {
      valid = false;
      newErrors.role = 'Please select a role.';
    }

    if (!address.match(/^.{10,}$/)) {
      valid = false;
      newErrors.address = 'Address must be at least 10 characters long.';
    }

    if (!zip.match(/^\d{5}$/)) {
      valid = false;
      newErrors.zip = 'Zip Code must be exactly 5 digits long.';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
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
    clearForm();
  };

  const clearForm = () => {
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
    setErrors({});
  };

  return (
    <>
      <section>
        {spinner && <Spinner />}
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <h1>Register Form</h1>
            <div className="input-box">
              <label>Full Name<FaStar className="star-icon" /></label>
              <input 
                type="text" 
                placeholder="Enter full name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="input-box">
              <label>Email Address<FaStar className="star-icon" /></label>
              <input 
                type="text" 
                placeholder="Enter email address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="input-box">
              <label>Employee ID<FaStar className="star-icon" /></label>
              <input 
                type="text" 
                placeholder="Enter employee ID" 
                value={employeeId} 
                onChange={(e) => setEmployeeId(e.target.value)} 
              />
              {errors.employeeId && <span className="error-message">{errors.employeeId}</span>}
            </div>
            <div className="input-box">
              <label>Date of Birth</label>
              <input 
                type="date" 
                placeholder="Enter birth date" 
                value={dob} 
                onChange={handleDateChange} 
              />
              {errors.dob && <span className="error-message">{errors.dob}</span>}
            </div>
            <div className="gender-box">
              <label >Gender<FaStar className="star-icon" /></label>
              <div className="gender-option">
                <div className="gender">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="male" 
                    checked={gender === 'male'} 
                    onChange={(e) => setGender(e.target.value)} 
                  />
                  <label htmlFor="check-male">Male</label>
                </div>
                <div className="gender">
                  <input 
                    type="radio" 
                    name="gender" 
                    value="female" 
                    checked={gender === 'female'} 
                    onChange={(e) => setGender(e.target.value)} 
                  />
                  <label htmlFor="check-female">Female</label>
                </div>
              </div>
              {errors.gender && <span className="error-message">{errors.gender}</span>}
            </div>
            <div className="input-box">
              <label>Phone Number</label>
              <input 
                type="tel" 
                placeholder="Enter phone number" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div className="input-box">
              <label>Department<FaStar className="star-icon" /></label>
              <select 
                value={department} 
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="" disabled hidden>Select department</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
              </select>
              {errors.department && <span className="error-message">{errors.department}</span>}
            </div>
            <div className="input-box">
              <label>Role<FaStar className="star-icon" /></label>
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
              >
                <option value="" disabled hidden>Select role</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
              {errors.role && <span className="error-message">{errors.role}</span>}
            </div>
            <div className="input-box">
              <label>Address</label>
              <textarea 
                placeholder="Enter address" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>
            <div className="input-box">
              <label>Zip Code</label>
              <input 
                type="number" 
                placeholder="Enter Zip Code" 
                value={zip} 
                onChange={(e) => setZip(e.target.value)} 
              />
              {errors.zip && <span className="error-message">{errors.zip}</span>}
            </div>
            <div className='btn-group'>
              <button type='button' onClick={clearForm}>Reset</button>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Form;
