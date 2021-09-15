import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Link underline="none" to="/">
          <IconButton>
            <HomeIcon style={{ color: 'white' }} />
          </IconButton>
        </Link>
        <Box display="flex" flexGrow={1}>
          <Typography variant="h6" component="h6">
            Student Management
          </Typography>
        </Box>
        <IconButton>
          <AccountCircleIcon style={{ color: 'white' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar;