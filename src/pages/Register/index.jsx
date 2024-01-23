import { FormattedMessage } from 'react-intl';
import { Box, Button, Typography } from '@mui/material';

import classes from './style.module.scss';

const Register = () => {
  const onSubmit = () => {
    console.log('test');
  };

  return (
    <Box className={classes.container}>
      <Box className={classes['card-container']}>
        <Box className={classes['card-wrapper']}>
          <Typography className={classes.title}>
            <FormattedMessage id="form_auth_register_title" />
          </Typography>
          <form action={onSubmit} className={classes['form-container']}>
            <Box>
              <Box className={classes.form}>
                <label htmlFor="fullName-login">
                  <FormattedMessage id="form_auth_full_name" />
                </label>
                <input type="text" />
              </Box>
              <Box className={classes.form}>
                <label htmlFor="email-login">
                  <FormattedMessage id="form_auth_email" />
                </label>
                <input type="email" />
              </Box>
              <Box className={classes.form}>
                <label htmlFor="password-login">
                  <FormattedMessage id="form_auth_password" />
                </label>
                <input type="password" />
              </Box>
            </Box>
            <Box className={classes.button}>
              <Button variant="contained" fullWidth>
                <FormattedMessage id="form_auth_register_title" />
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
