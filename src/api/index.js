/**
 * Created by junxiachen on 17/7/28.
 */
import axios from 'axios';

import {
  PersonalizedResource,
  PrivatecontentResource,
  NewSongResource,
  PersonalizedMvResource,
  DjProgramResource,
  TopPlaylistResource
} from './resource'

export default{
  getPersonalized(){
    return axios.get(PersonalizedResource)
  },
  getPrivatecontent(){
    return axios.get(PrivatecontentResource)
  },
  getNewSong(){
    return axios.get(NewSongResource);
  },
  getPersonalizedMv(){
    return axios.get(PersonalizedMvResource);
  },
  getDjProgram(){
    return axios.get(DjProgramResource);
  },
  /**
   * @param order new: 最新, hot: 最热
   * @param limit 每次请求返回列表条数,默认 50
   * @param offset 偏移量,默认 0
   */
  getTopPlaylistResource (order, limit, offset){
    return axios.get(TopPlaylistResource, {
      params: {
        order: order || 'hot',
        limit: limit || 50,
        offset: offset || 0
      }
    });
  }
}
