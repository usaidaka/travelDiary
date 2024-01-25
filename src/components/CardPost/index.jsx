import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectLogin } from '@containers/Client/selectors';
import { connect } from 'react-redux';
import bookmark from '../../assets/bookmark.png';
import classes from './style.module.scss';

const CardPost = ({ id, img, title, date, shortDesc, action, isMarked, login }) => {
  const location = useLocation();

  console.log(login);
  return (
    <Box className={classes['card-container']}>
      <Box className={classes['image-container']}>
        <img src={img} alt="" />
        {login && (
          <Box
            className={isMarked || location.pathname === '/bookmark' ? classes['bookmark-active'] : classes.bookmark}
            onClick={() => action(id)}
          >
            <img src={bookmark} alt="" />
          </Box>
        )}
      </Box>
      <Box className={classes['content-container']}>
        <Link to={`/post/${id}`}>
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
        </Link>
      </Box>
    </Box>
  );
};

CardPost.propTypes = {
  id: PropTypes.number,
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
  shortDesc: PropTypes.string.isRequired,
  login: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(CardPost);
