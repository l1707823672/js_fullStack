import {State} from '@/store/interface';
import {Commit} from 'vuex';
import {getMovieList} from '@/api/movie';
const getters = {
}
// const a:string ='1';
const state:State = {
  movieList:[
    {
      name:"霸王别姬",
      title:"排名第一的华语电影",
      id:"123456"
    },
    {
      name:"霸王别姬",
      title:"排名第一的华语电影",
      id:"123456"
    }
  ]
}
const mutations ={};
const actions= {
  // api  前后端的 分离点 
  //comit ,mutations
  async movieList(context:{commit:Commit},cate:string){
    const res =await getMovieList(cate)
    .then((response)=>response)
    return res;
  }
}

export default {
  state,
  getters,
  mutations,
  actions

}