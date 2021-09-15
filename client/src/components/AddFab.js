import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

const AddFab = () => {
  const classes = useStyles();
  return (
    <Fab color="primary" size="medium" className={classes.fab} aria-label="add">
      <AddIcon fontSize="large" />
    </Fab>
  )
}

export default AddFab;