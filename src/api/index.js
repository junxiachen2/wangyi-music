/**
 * Created by junxiachen on 17/7/28.
 */
import axios from 'axios';

import {PersonalizedResource,PrivatecontentResource,NewSongResource} from './resource'

export default{
  getPersonalized(){
    return axios.get(PersonalizedResource)
  },
  getPrivatecontent(){
    return axios.get(PrivatecontentResource)
  },
  getNewSong(){
    return axios.get(NewSongResource);
  }
}
