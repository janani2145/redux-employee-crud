// Edit.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getById, updateTask } from './Action';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from './Spinner';
import '../Spinner.css';

const Edit = () => {
  const dispatch = useDispatch();
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
  const [zip, setZip] = useState('')
  const navigate = useNavigate();
  const { id } = useParams();
  const userUpdate = useSelector((state) => state.todos.find(todo => todo.id === id));

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (userUpdate) {
      setName(userUpdate.name || '');
      setEmail(userUpdate.email || '');
      setEmployeeId(userUpdate.employeeId || '');
      setDob(userUpdate.dob || '');
      setGender(userUpdate.gender || '');
      setPhone(userUpdate.phone || '');
      setDepartment(userUpdate.department || '');
      setRole(userUpdate.role || '');
      setAddress(userUpdate.address || '');
       setZip(userUpdate.zip || '');
    }
  }, [userUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);

    if (userUpdate) {
      dispatch(updateTask(id, { 
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
        console.error('Error updating task:', error);
        setSpinner(false);
      });
    }

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
      {spinner && <Spinner />}
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Update Form</h1>
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-box">
            <label>Employee ID</label>
            <input type="text" placeholder="Enter employee ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
          </div>
          <div className="input-box">
            <label>Date of Birth</label>
            <input type="date" placeholder="Enter birth date" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>
          <div className="gender-box">
            <label>Gender</label>
            <div className="gender-option">
              <div className="gender">
                <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="gender">
                <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                <label htmlFor="check-female">Female</label>
              </div>
            </div>
          </div>
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="input-box">
            <label>Department</label>
            <select value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="">Select department</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="IT">IT</option>
            </select>
          </div>
          
          <div className="input-box">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select role</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <div className="input-box">
            <label>Address</label>
            <textarea  value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
           <div className="input-box">
            <label>Zip Code</label>
            <input type="number" value={zip} onChange={(e) => setZip(e.target.value)} />
          </div>
          <div className='btn'>
          <button type='submit'>Update </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Edit;
