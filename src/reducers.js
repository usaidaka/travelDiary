import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import loginReducer, { storedLoginState } from '@pages/Login/reducer';
import languageReducer from '@containers/Language/reducer';
import homeReducer, { storedHomeKey } from '@pages/Home/reducer';
import profileReducer, { storedProfileKey } from '@pages/Profile/reducer';

import registerReducer, { storedRegisterState } from '@pages/Register/reducer';
import { mapWithPersistor } from './persistence';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  register: { reducer: registerReducer, whitelist: storedRegisterState },
  login: { reducer: loginReducer, whitelist: storedLoginState },
  home: { reducer: homeReducer, whitelist: storedHomeKey },
  profile: { reducer: profileReducer, whitelist: storedProfileKey },
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
