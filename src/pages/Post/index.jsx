import { Box, Button, Container, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectLogin } from '@containers/Client/selectors';
import upload from '../../assets/upload.png';
import classes from './style.module.scss';
import { createPost } from './actions';

const Post = ({ login }) => {
  const [image, setImage] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const inputPhotoRef = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setShowImage(URL.createObjectURL(selectedImage));
    setImage(selectedImage);
  };

  useEffect(() => {
    if (!login) {
      navigate('/');
    }
  }, [login, navigate]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('imageUrl', image);
    formData.append('title', data.title);
    formData.append('shortDesc', data.shortDesc);
    formData.append('description', data.description);

    dispatch(
      createPost(formData, () => {
        navigate('/profile');
        reset();
      })
    );
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h3" color="initial" fontWeight={600} className={classes.title}>
        <FormattedMessage id="new_journey" />
      </Typography>
      <form action="create post" onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Box className={classes.uploader}>
            <Box className={classes['upload-image']} onClick={() => inputPhotoRef.current.click()}>
              <img src={showImage || upload} alt="" />
              <input
                type="file"
                id=""
                name="image"
                accept="image/png, image/jpg, image/jpeg"
                required
                ref={inputPhotoRef}
                className={classes['input-hide']}
                onChange={handleImageChange}
              />
            </Box>
            <Box className={classes['upload-title']}>
              <Typography variant="body1" color="initial" className={classes.label}>
                <FormattedMessage id="title" />
              </Typography>
              <input
                type="text"
                id="title"
                {...register('title', {
                  required: 'title is required',
                })}
                aria-invalid={errors.title ? 'true' : 'false'}
              />
              {errors.title && (
                <span className={classes.error} role="alert">
                  {errors.title.message}
                </span>
              )}
            </Box>
            <Box className={classes['upload-short-description']}>
              <Typography variant="body1" color="initial" className={classes.label}>
                <FormattedMessage id="short_description" />
              </Typography>
              <input
                type="text"
                id="shortDesc"
                {...register('shortDesc', {
                  required: 'short description is required',
                })}
                aria-invalid={errors.shortDesc ? 'true' : 'false'}
              />
              {errors.shortDesc && (
                <span className={classes.error} role="alert">
                  {errors.shortDesc.message}
                </span>
              )}
            </Box>
            <Box className={classes['upload-description']}>
              <Typography variant="body1" color="initial" className={classes.label}>
                <FormattedMessage id="description" />
              </Typography>
              <Box className={classes.quill}>
                <Controller
                  name="description"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Description is required' }}
                  render={({ field }) => (
                    <ReactQuill
                      theme="snow"
                      value={field.value}
                      onChange={(val) => field.onChange(val)}
                      className={classes['quill-form']}
                    />
                  )}
                />
              </Box>
              {errors.description && (
                <span className={classes.error} role="alert">
                  {errors.description.message}
                </span>
              )}
            </Box>
          </Box>
          <Box className={classes.submit}>
            <Button type="submit" size="small" variant="contained">
              Post
            </Button>
          </Box>
        </Container>
      </form>
    </Box>
  );
};

Post.propTypes = {
  login: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(Post);
