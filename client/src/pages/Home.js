import React from 'react';
import { Link } from 'react-router-dom';
import StudentTable from './../components/StudentTable'
import AddFab from './../components/AddFab';

const Home = () => {
  return (
    <React.Fragment>
      <StudentTable />
      <Link to="/new">
        <AddFab />
      </Link>
    </React.Fragment>
  )
}

export default Home;