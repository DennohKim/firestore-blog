import { signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../lib/context";
import { auth, googleAuthProvider } from "../lib/firebase"

export default function Enter(props){
    const { user, username } = useContext(UserContext);


   
    //1. User signed out <SignInButton/>
    //1. User signed in, but missing username <UsernameForm/>
    //1. User signed in, has username <SignOutButton/>
    return (
        <main>
            {user ? !username ? <UsernameForm /> : <SignOutButton/> : <SignInButton/>}

        </main>
    )
}

//Sign in with google
function SignInButton(){
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleAuthProvider);
    }
    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'} />
            Sign in with Google
        </button>
    )

}


//Sign out button
function SignOutButton(){
    return <button onClick={() => signOut(auth)}>Sign Out</button>

}
 
function UsernameForm(){


}

 