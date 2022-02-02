import React from 'react';
import { Link } from "react-router-dom";
import './Department.scss';
import UserDepartment from "../../components/UserDeprtment/UserDepartment"

const Department = () => {
  return (
    <div className="Department">
        <UserDepartment/>
    </div>
  );
}

export default Department;

