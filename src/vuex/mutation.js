export default{
  signIn(state, userId) { // 로그인을 통해 회원 정보 전송
    state.signIn = true;
    state.userId = userId;

    // sessionStorage.setItem('signIN', true);
    // sessionStorage.setItem('userID', userid);
  },
  signOut(state, payload){
    state.signIn=false;
    // localStorage.setItem("signIN", false);
    // localStorage.removeItem("userID");
  },
  setOBJ(state, payload){
    state.imgOBJ=payload;
  },
  setResultUrl(state, payload){
    state.imgExifOrientation=payload;
  }
}