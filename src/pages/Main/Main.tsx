import React from 'react';
import './Main.scss';
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="Main">
        <ul>
            <li>
                <Link to='/'>Отдел продаж</Link>
            </li>
            <li>
                <Link to='/'>Финансовый отдел</Link>
            </li>
            <li>
                <Link to='/'>Отдел маркетинга</Link>
            </li>
        </ul>
    </div>
  );
}

export default Main;

