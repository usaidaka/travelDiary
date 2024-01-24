import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import bookmark from '../../assets/bookmark.png';
import classes from './style.module.scss';

const CardPost = ({ img, title, date, shortDesc }) => {
  return (
    <Box className={classes['card-container']}>
      <Box className={classes['image-container']}>
        <img src={img} alt="" />
        <Box className={classes.bookmark}>
          <img src={bookmark} alt="" />
        </Box>
      </Box>
      <Box className={classes['content-container']}>
        <Box className={classes['title-wrapper']}>
          <Typography variant="body1" color="initial" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="body1" color="initial" className={classes.date}>
            {date}
          </Typography>
        </Box>
        <Typography variant="body1" color="initial" className={classes['text-content']}>
          {shortDesc}
        </Typography>
      </Box>
    </Box>
  );
};

CardPost.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
  shortDesc: PropTypes.string.isRequired,
};

export default CardPost;
