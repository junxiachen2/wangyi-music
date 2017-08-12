/**
 * Created by junxiachen on 17/7/28.
 */
import {API_ROOT} from './config'

const apiMusic = {
  personalized: '/api/personalized',
  privatecontent: '/api/personalized/privatecontent'
};

export const PersonalizedResource = API_ROOT.concat(apiMusic.personalized);
export const PrivatecontentResource = API_ROOT.concat(apiMusic.privatecontent);
