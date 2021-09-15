import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  actions: {
    whiteSpace: 'nowrap',
  },
});

export default function StudentTable() {
  const [studentData, setStudentData] = useState([]);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/students/')
      .then(response => setStudentData(response.data))
      .catch(err => console.log(err))
  }, [studentData]);

  const deleteStudent = (id) => {
    if (window.confirm(id)) {
      axios.delete(`http://localhost:3000/students/${id}`)
        .then(setSnackBarOpen(true))
        .catch(err => console.log(err))
    }
  }
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table size="small" className={classes.table} stickyHeader aria-label="student table">
          <TableHead variant="head">
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.map((row) => (
              <TableRow key={row.ID}>
                <TableCell component="th" scope="row" align="right">
                  {row.ID}
                </TableCell>
                <TableCell>{row.Name}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell className={classes.actions}>
                  <Link to={{ pathname: '/edit', state: { id: row.ID } }} >
                    <IconButton size="small">
                      <EditIcon fontSize="small" style={{ color: 'yellow' }} />
                    </IconButton>
                  </Link>
                  <IconButton size="small" onClick={() => deleteStudent(row.ID)}>
                    <DeleteIcon fontSize="small" style={{ color: 'red' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar open={snackBarOpen} autoHideDuration={6000} message="Student deleted" onClose={() => setSnackBarOpen(false)} />
    </React.Fragment>
  );
}
