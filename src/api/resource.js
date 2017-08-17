/**
 * Created by junxiachen on 17/7/28.
 */
import {API_ROOT} from './config'

const apiMusic = {
  personalized: '/api/personalized',
  privatecontent: '/api/personalized/privatecontent',
  newSong: '/api/personalized/newsong',
  personalizedMv: '/api/personalized/mv',
  djProgram: '/api/personalized/djprogram'
};

export const PersonalizedResource = API_ROOT.concat(apiMusic.personalized);
export const PrivatecontentResource = API_ROOT.concat(apiMusic.privatecontent);
export const NewSongResource = API_ROOT.concat(apiMusic.newSong);
export const PersonalizedMvResource = API_ROOT.concat(apiMusic.personalizedMv);
export const DjProgramResource = API_ROOT.concat(apiMusic.djProgram);
