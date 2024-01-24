import { FormattedMessage } from 'react-intl';
import { Box, Button, Typography } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { encryptPayload } from '@utils/encrypt';
import { useNavigate } from 'react-router-dom';

import { postRegister } from './actions';
import classes from './style.module.scss';

const Register = () => {
  const [peek, setPeek] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const dataUser = {
      fullname: encryptPayload(data.fullname),
      email: encryptPayload(data.email),
      password: encryptPayload(data.password),
    };

    dispatch(
      postRegister(
        dataUser,
        () => {
          navigate('/login');
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
            <FormattedMessage id="form_auth_register_title" />
          </Typography>
          <form action="register" onSubmit={handleSubmit(onSubmit)} className={classes['form-container']}>
            <Box>
              <Box className={classes.form}>
                <label htmlFor="fullname">
                  <FormattedMessage id="form_auth_full_name" />
                </label>
                <input
                  id="fullname"
                  type="text"
                  {...register('fullname', {
                    required: 'fullname is required',
                  })}
                  aria-invalid={errors.fullname ? 'true' : 'false'}
                />
                {errors.fullname && (
                  <span className={classes.error} role="alert">
                    {errors.fullname.message}
                  </span>
                )}
              </Box>
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
                  aria-invalid={errors.email ? 'true' : 'false'}
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
