import { FormattedMessage } from 'react-intl';
import { Box, Button, Typography } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { encryptPayload } from '@utils/encrypt';

import classes from './style.module.scss';
import { postLogin } from './actions';

const Login = () => {
  const [peek, setPeek] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      postLogin(
        {
          email: encryptPayload(data.email),
          password: encryptPayload(data.password),
        },
        () => {
          navigate('/');
          reset();
        },
        (err) => {
          console.log(err);
        }
      )
    );
  };

  return (
    <Box className={classes.container}>
      <Box className={classes['card-container']}>
        <Box className={classes['card-wrapper']}>
          <Typography className={classes.title}>
            <FormattedMessage id="form_auth_login_title" />
          </Typography>
          <form action="Login" onSubmit={handleSubmit(onSubmit)} className={classes['form-container']}>
            <Box>
              <Box className={classes.form}>
                <label htmlFor="email-login">
                  <FormattedMessage id="form_auth_email" />
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Entered value does not match email format',
                    },
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <span className={classes.error} role="alert">
                    {errors.email.message}
                  </span>
                )}
              </Box>
              <Box className={classes.form}>
                <label htmlFor="password-login">
                  <FormattedMessage id="form_auth_password" />
                </label>
                <input
                  type={peek ? 'text' : 'password'}
                  {...register('password', {
                    required: 'password is required',
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      message: 'Min 8 char, 1 letter, 1 number and 1 symbol',
                    },
                  })}
                  aria-invalid={errors.password ? 'true' : 'false'}
                />
                <Box className={classes['password-wrapper']}>
                  <Button onClick={() => setPeek(!peek)} className={classes.password}>
                    {peek ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
                  </Button>
                </Box>
                {errors.password && (
                  <span className={classes.error} role="alert">
                    {errors.password.message}
                  </span>
                )}
              </Box>
            </Box>
            <Box className={classes.button}>
              <Button type="submit" variant="contained" fullWidth>
                <FormattedMessage id="form_auth_login_title" />
              </Button>
            </Box>
          </form>
          <Link to="/register">
            <Typography variant="body1" color="initial" className={classes.redirect}>
              <FormattedMessage id="dont_have_account" />
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
