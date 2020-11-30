import React, { Fragment, useState, useContext } from 'react';
import CourseContent from './CourseContent'
import TaskListDropdown from './TaskListDropdown'
import { useQuery } from "@apollo/react-hooks";
import { gql } from "@apollo/client";

const query = gql`
  query getUsers {
    getUsers {
      users{
        id
        firstName
        lastName
      } 
    }
  }
`;

function App() {
  const { loading, data} = useQuery(query);

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>There's an error: {errorUser.message}</p>;
  console.dir(data);
  return (
    <div>
    {
      data.users.map((user, index) => (
      <div key={user.id}>
        <p>
          <b>{user.firstName}</b>
        </p>
      </div>
      ))
    }
    </div>
  );
}

// function App() {
//   return (
//     <Fragment>
//     <TaskListDropdown/>
//     <CourseContent/>
//     </Fragment>
//   );
// }

export default App;
