const user ={
  state:{
    token:null,
    avator:'https://wpimg.wallstcn.com/3fce7247-d863-4e3d-a0de-d30aaef7358a'
  },
  mutation:{
    SET_TOKEN:(STATE,token)=>{
      state.token= token ;
    }
  },
  action:{
    Login({commit},token){
      return new Promise((resolve,reject)=>{
        commit('SET_TOKEN',token)
        resolve();
      })
    }
  }
}
export default user