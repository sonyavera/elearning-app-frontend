import logo from '../logo.svg';
import '../styles/App.css';
import React, { Component, Fragment, useState, useContext } from 'react';
import CourseContent from './CourseContent'
import TaskListDropdown from './TaskListDropdown'

function App() {



  return (
    <Fragment>
    <TaskListDropdown/>
    <CourseContent/>
    </Fragment>
  );
}

export default App;
