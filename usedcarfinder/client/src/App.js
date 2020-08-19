// import React, { Component } from "react";

// import "./App.css";
// import firebase from "firebase";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// firebase.initializeApp({
//   apiKey:"AIzaSyCxiw5em0-MAHTE7v6JJvuXuXpSO7RLOnM",
//   authDomain: "usedcarfinder2.firebaseapp.com"
// })

// class App extends Component {
//   state={isSignedIn : false}

//   uiConfig = {
//     signInFlow: "popup",
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//      firebase.auth.GithubAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     callbacks: {
//       signInSuccess: () => false
//     }
//   }

// componentDidMount = () => {
//   firebase.auth().onAuthStateChanged(user => {
//     this.setState({ isSignedIn: !!user })
//     console.log("user", user)
//   })
// }

//   render() {
//     return (
//       <div className="App">
//        {this.state.isSignedIn ? (
//          <span>
//          <div>Signed In!</div>
//          <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
//          <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
//          <img
//            alt="profile picture"
//            src={firebase.auth().currentUser.photoURL}

//          />
//        </span>
//        ) :  (
//         <StyledFirebaseAuth
//         uiConfig={this.uiConfig}
//         firebaseAuth={firebase.auth()}
//       />
//        )}
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cars from "./pages/Cars";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/cars"]}>
            < Cars />
          </Route>
          <Route exact path="/cars/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
