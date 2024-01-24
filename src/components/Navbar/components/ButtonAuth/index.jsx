import { Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import classes from './style.module.scss';
// import Login from '@pages/Login';
// import BasicModal from '@components/BasicModal';

const ButtonAuth = () => {
  return (
    <div className={classes.wrapper}>
      <Link to="/login">
        <Button variant="outlined" size="small">
          <FormattedMessage id="form_auth_login_title" />
        </Button>
      </Link>
      {/* <BasicModal title="Login" variant="outlined">
        <Login />
      </BasicModal> */}

      <Link to="/register">
        <Button variant="contained" size="small">
          <FormattedMessage id="form_auth_register_title" />
        </Button>
      </Link>
    </div>
  );
};

export default ButtonAuth;
