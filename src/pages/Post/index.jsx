import { Box, Button, Container, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

import classes from './style.module.scss';

const Post = () => {
  const [value, setValue] = useState('');
  return (
    <Box className={classes.container}>
      <Typography variant="h3" color="initial" fontWeight={600}>
        <FormattedMessage id="new_journey" />
      </Typography>
      <Container>
        <Box className={classes.uploader}>
          <Box className={classes['upload-image']}>
            <Button variant="contained">Upload</Button>
          </Box>
          <Box className={classes['upload-title']}>
            <Typography variant="body1" color="initial" className={classes.label}>
              <FormattedMessage id="title" />
            </Typography>
            <input type="text" />
          </Box>
          <Box className={classes['upload-short-description']}>
            <Typography variant="body1" color="initial" className={classes.label}>
              <FormattedMessage id="short_description" />
            </Typography>
            <input type="text" />
          </Box>
          <Box className={classes['upload-description']}>
            <Typography variant="body1" color="initial" className={classes.label}>
              <FormattedMessage id="description" />
            </Typography>
            <Box className={classes.quill}>
              <ReactQuill theme="snow" value={value} onChange={setValue} className={classes['quill-form']} />
            </Box>
          </Box>
        </Box>
        <Box className={classes.submit}>
          <Button variant="contained">Post</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Post;
