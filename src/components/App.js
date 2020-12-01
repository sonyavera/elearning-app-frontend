import React, { Fragment, useState, useContext, useEffect } from 'react';
import CourseContent from './CourseContent'
import TaskListDropdown from './TaskListDropdown'
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { ApolloConsumer } from '@apollo/client';



const GET_USERS = gql`
  query getUsers {
      users{
        id
        firstName
        lastName
      } 
    }
`;

function App() {
    const [users, setUsers] = useState([])
    const [projects, setProjects] = useState([])
    const [skip, setSkip] = useState(false)

    const { loading, data } = useQuery(GET_USERS);
    React.useEffect(() => {
      if (!loading && !data){
        setSkip(true)
      }
      console.log(data)
    }, [data, loading])



  return (
    <div>
    <TaskListDropdown 
      projects={projects} 
      users={users}
      />
    <CourseContent 
      projects={projects}
      users={users}
      />
    </div>
  );
}

export default App;
