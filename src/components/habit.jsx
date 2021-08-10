import React, { Component } from "react";
import '@fortawesome/fontawesome-free/js/all.js';

class Habit extends Component {
  render() {
    return (
        <li className="habit">
          <h1 className="title">Reading</h1>
          <span className="number">0</span>
          <button className="habit-button habit-plus">
              <i className="fas fa-plus"></i>
          </button>
          <button className="habit-button habit-minus">
              <i className="fas fa-minus"></i>
          </button>
          <button className="habit-button habit-delete">
          <i class="fas fa-trash-alt"></i>
          </button>
        </li>
        );
  }
}

export default Habit;
