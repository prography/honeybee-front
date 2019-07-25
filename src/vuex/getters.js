export default{
  getSignIn(state){
    return state.signIn;
    //로그인 상태 저장
  },
  getUserId(state) { // 사용자 아이디 반환
    return state.userId;
  },
  getOBJ(state){
    return state.imgOBJ;
    //원본 이미지 객체를 저장
  },
  getResultUrl(state){
    return state.resultUrl;
  }
}