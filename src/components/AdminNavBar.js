import React from "react";
import PropTypes from 'prop-types';

function AdminNavBar({ onChangePage }) {
  return (
    <nav role="navigation" aria-label="Admin navigation">
      <button 
        className="nav-button"
        onClick={() => onChangePage("Form")}
      >
        New Question
      </button>
      <button 
        className="nav-button"
        onClick={() => onChangePage("List")}
      >
        View Questions
      </button>
    </nav>
  );
}

AdminNavBar.propTypes = {
  onChangePage: PropTypes.func.isRequired
};

export default AdminNavBar;