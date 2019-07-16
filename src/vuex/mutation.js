export default{
  signIn(state, userId) { // 로그인을 통해 회원 정보 전송
    state.signIn = true;
    state.userId = userId;
  },
  signOut(state, payload){
    state.signIn=false;
  },
  setOBJ(state, payload){
    state.imgOBJ=payload;
  },
  setResultUrl(state, payload){
    state.imgExifOrientation=payload;
  }
}