import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import List from '../../../components/List';
import array from './data';
import { useDispatch, useSelector } from 'react-redux';
import { getSchoolSubjectsList } from "../SchoolSlice";
import { SchoolSubjectListSelector,SchoolSubjectListStatusSelector } from 'utils/selectors';



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));


const SchoolSubject = () => {
  // const classes = useStyles();
  const [customers] = useState(array);
  let columnName = ['Name', 'Description', 'Delate Subject','Update', 'Teacher']
  let ButtonName = ['Delate Subject', 'Update', 'Teacher'];
  const dispatch = useDispatch()
  const subjects = useSelector(SchoolSubjectListSelector)
  const subjectsStatus = useSelector(SchoolSubjectListStatusSelector)
  console.log(subjectsStatus,subjects)
  useEffect(() => {
dispatch(getSchoolSubjectsList())
  }, [])

  return (
      <Container maxWidth={false}>
        <h1>Lista de Materias de la Escuela</h1>
        <Box mt={3}>
          {subjectsStatus === 'success' ? <List customers={subjects} columnName={columnName} ButtonName={ButtonName}/> : null}
        </Box>
      </Container>

  );
};

export default SchoolSubject;