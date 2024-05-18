import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, readTask } from './Action';
import '../Table.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    dispatch(readTask());
  }, [dispatch]);

  const showDialog = (id) => {
    setSelectedUserId(id);
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
    setSelectedUserId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    closeDialog();
  };

  return (
    <>
      <h2>Employee Details</h2>
      <div>
        <table className="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Employee ID</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Department</th>
              <th>Role</th>
              <th>Address</th>
              <th>Action</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr className="active-row" key={todo.id}>
                <td>{index + 1}</td>
                <td>{todo.name}</td>
                <td>{todo.email}</td>
                <td>{todo.employeeId}</td>
                <td>{todo.dob}</td>
                <td>{todo.gender}</td>
                <td>{todo.phone}</td>
                <td>{todo.department}</td>
                <td>{todo.role}</td>
                <td>{todo.address}</td>
                <td>{todo.zip}</td>
                <td>
                < div className="action-column">
                  <button className="delete-icon" onClick={() => showDialog(todo.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <Link className="edit-link" to={`/edit/${todo.id}`}>
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {dialogVisible && (
          <div className="dialog-overlay">
            <div className="dialog">
              <h3>Are you sure you want to delete this item?</h3>
              <button className="wx_remove" type="button" onClick={() => handleDelete(selectedUserId)}>
                Yes
              </button>
              <button type="button" className="wx_edit" onClick={closeDialog}>
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default List;
