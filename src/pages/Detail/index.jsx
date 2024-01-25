import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Box, Container, Typography } from '@mui/material';

import { getPostDetail } from './actions';
import { selectPostDetail } from './selectors';
import classes from './style.module.scss';

const Detail = ({ postDetail }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({});

  useEffect(() => {
    dispatch(
      getPostDetail(id, () => {
        navigate('/notfound');
      })
    );
  }, []);

  useEffect(() => {
    if (postDetail) {
      setData(postDetail);
    }
  }, [postDetail]);

  return (
    <Container>
      <Box className={classes['header-container']}>
        <Box>
          <Typography variant="body1" color="initial" className={classes.title}>
            {data.title}
          </Typography>
          <Typography variant="body1" color="initial" className={classes.timestamp}>
            {data.timestamp}
          </Typography>
        </Box>
        <Typography variant="body1" color="initial" className={classes.fullname}>
          {data.user?.fullname}
        </Typography>
      </Box>
      <Box className={classes['image-wrapper']}>
        <img src={data.imageUrl} alt="" />
      </Box>

      <Box>
        <div className={classes['description-container']} dangerouslySetInnerHTML={{ __html: data?.description }} />
      </Box>
    </Container>
  );
};

Detail.propTypes = {
  postDetail: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  postDetail: selectPostDetail,
});

export default connect(mapStateToProps)(Detail);
