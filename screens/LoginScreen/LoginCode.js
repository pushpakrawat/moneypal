import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { doc, collection, setDoc, getDoc } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../firebaseconfig";
import { setUserId } from "../../redux/actions/userActions";
import { setExpenseDocId } from "../../redux/actions/expenseActions";
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    "124258707298-eqpe521eultkkoiauoiq9eod5nmfmi0j.apps.googleusercontent.com",
});

export const onGoogleButtonPress = async (navigation, dispatch) => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);
    const user = userCredential.user;

    // Create a reference to the user's document
    const usersCollectionRef = collection(FIREBASE_DB, 'users');
    const userDocRef = doc(usersCollectionRef, user.uid);

    await setDoc(userDocRef, {});

    // Create the "userData" subcollection within the user's document
    const userDataCollectionRef = collection(userDocRef, "userData");
    const userDataDocRef = doc(userDataCollectionRef);

    // Add the email to the "userData" subcollection
    await setDoc(userDataDocRef, {
      email: user.email,
      // Add other user data as needed
    });

    // Create the "userExpenses" subcollection within the user's document
    collection(userDocRef, "userExpenses");


    console.log("User registered with ID: ", user.uid);

    // Dispatch actions to update the Redux states with user and expense document IDs
    dispatch(setUserId(user.uid)); 
    dispatch(setExpenseDocId(user.uid));

    navigation.navigate('TabNavigator');
  } catch (error) {
    console.error("Error registering user: ", error);
  }
};


export const loginUser = async (email, password, navigation, dispatch) => {
  try {
    console.log("Logging in...");
    const auth = FIREBASE_AUTH;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Login successful:", user);

    dispatch(setUserId(user.uid));
    dispatch(setExpenseDocId(user.uid));

    navigation.navigate("TabNavigator");
  } catch (error) {
    console.error("Login error:", error);
  }
};
