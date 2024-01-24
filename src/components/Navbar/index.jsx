import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { setLocale } from '@containers/App/actions';
import { createStructuredSelector } from 'reselect';
import { selectLogin } from '@containers/Client/selectors';
import { setLogin, setToken } from '@containers/Client/actions';

import photoProfile from '../../assets/photoProfile.png';
import profileIcon from '../../assets/profileIcon.png';
import newJourneyIcon from '../../assets/newJourneyIcon.png';
import bookmark from '../../assets/bookmark.png';
import logoutIcon from '../../assets/logoutIcon.png';
import logo from '../../assets/Icon.png';
import classes from './style.module.scss';
import ButtonAuth from './components/ButtonAuth';

const Navbar = ({ locale, login }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuPosition, setMenuPosition] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState(null);
  const [isLogedIn, setIsLogedIn] = useState(false);

  const open = Boolean(menuPosition);
  const openDropdown = Boolean(dropdownPosition);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const handleClickDropdown = (event) => {
    setDropdownPosition(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setDropdownPosition(null);
  };

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

  const goHome = () => {
    navigate('/');
  };

  const handleLogOut = () => {
    dispatch(setToken(null));
    dispatch(setLogin(false));
    handleClose();
    handleCloseDropdown();
    navigate('/');
  };

  useEffect(() => {
    setIsLogedIn(login);
  }, [login]);

  return (
    <div className={` ${isLogedIn ? classes.headerWrapper : classes.logedIn}`} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes['dropdown-wrapper']}>
          {isLogedIn ? (
            <>
              {/* TRANSLATE */}
              <div className={classes.toolbar}>
                <div className={classes.toggle} onClick={handleClick}>
                  <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
                  <div className={classes.lang}>{locale}</div>
                  <ExpandMoreIcon />
                </div>
              </div>
              <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
                <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
                  <div className={classes.menu}>
                    <Avatar className={classes.menuAvatar} src="/id.png" />
                    <div className={classes.menuLang}>
                      <FormattedMessage id="app_lang_id" />
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
                  <div className={classes.menu}>
                    <Avatar className={classes.menuAvatar} src="/en.png" />
                    <div className={classes.menuLang}>
                      <FormattedMessage id="app_lang_en" />
                    </div>
                  </div>
                </MenuItem>
              </Menu>
              {/* PROFILE */}
              <div>
                <div className={classes.toolbar}>
                  <div className={classes.toggle} onClick={handleClickDropdown}>
                    <img src={photoProfile} alt="" className={classes['photo-profile']} />
                  </div>
                </div>
                <Menu open={openDropdown} anchorEl={dropdownPosition} onClose={handleCloseDropdown}>
                  <Link
                    to="/profile"
                    onClick={() => {
                      handleClose();
                      handleCloseDropdown();
                    }}
                  >
                    <MenuItem>
                      <div className={classes.menu}>
                        <img src={profileIcon} alt="" className={classes.icon} />
                        <div className={classes.menuLang}>
                          <FormattedMessage id="profile" />
                        </div>
                      </div>
                    </MenuItem>
                  </Link>
                  <Link
                    to="/post"
                    onClick={() => {
                      handleClose();
                      handleCloseDropdown();
                    }}
                  >
                    <MenuItem>
                      <div className={classes.menu}>
                        <img src={newJourneyIcon} alt="" className={classes.icon} />
                        <div className={classes.menuLang}>
                          <FormattedMessage id="new_journey" />
                        </div>
                      </div>
                    </MenuItem>
                  </Link>
                  <Link
                    to="/bookmark"
                    onClick={() => {
                      handleClose();
                      handleCloseDropdown();
                    }}
                  >
                    <MenuItem>
                      <div className={classes.menu}>
                        <img src={bookmark} alt="" className={classes.icon} />
                        <div className={classes.menuLang}>
                          <FormattedMessage id="bookmark" />
                        </div>
                      </div>
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={handleLogOut}>
                    <div className={classes.menu}>
                      <img src={logoutIcon} alt="" className={classes.icon} />
                      <div className={classes.menuLang}>
                        <FormattedMessage id="logout" />
                      </div>
                    </div>
                  </MenuItem>
                </Menu>
              </div>
            </>
          ) : (
            <div className={classes['unloggedin-wrapper']}>
              <div className={classes.toolbar}>
                <div className={classes.toggle} onClick={handleClick}>
                  <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
                  <div className={classes.lang}>{locale}</div>
                  <ExpandMoreIcon />
                </div>
              </div>
              <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
                <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
                  <div className={classes.menu}>
                    <Avatar className={classes.menuAvatar} src="/id.png" />
                    <div className={classes.menuLang}>
                      <FormattedMessage id="app_lang_id" />
                    </div>
                  </div>
                </MenuItem>
                <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
                  <div className={classes.menu}>
                    <Avatar className={classes.menuAvatar} src="/en.png" />
                    <div className={classes.menuLang}>
                      <FormattedMessage id="app_lang_en" />
                    </div>
                  </div>
                </MenuItem>
              </Menu>
              <ButtonAuth />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  locale: PropTypes.string.isRequired,
  login: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  login: selectLogin,
});

export default connect(mapStateToProps)(Navbar);
