
import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducer';
import twitchReducer from './twitchReducer';
import eveMailReducer from './eveMailReducer';

import wowRelmReducer from './wowRelmReducer';
import wowArmoryReducer from './wowArmoryReducer';

import sideBarReducer from './sideBarReducer';

const rootReducer = combineReducers({
  games: sideBarReducer,
  youtube: youtubeReducer,
  twitchVideos: twitchReducer,
  eveMail: eveMailReducer,
  wowRelms: wowRelmReducer,
  wowArmory: wowArmoryReducer

});

export default rootReducer;
