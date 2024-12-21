import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { Link, useNavigate } from "react-router-dom";

function SignInwithGoogle() {
    const navigate = useNavigate();
    function googleLogin() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then(async (result) => {
        const user = result.user;
        if (result.user) {
          navigate('/after-login')
          localStorage.setItem('idToken','true')
          window.location.href = "/";
        }
      });
    }
    return (
      <div>
        <p style={{textAlign:'center',margin:'10px 0'}}>--Or continue with--</p>
        <div
          style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
          onClick={googleLogin}
        >
          <img src='google.png' width={"60%"} />
        </div>
      </div>
    );
  }
  export default SignInwithGoogle;