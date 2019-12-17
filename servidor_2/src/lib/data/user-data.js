

export const sigin = async(email, password)=>{
    await firebase.auth().signInWithEmailAndPassword(email,password);
}

export const AddUser =async (user) =>{
    const{email, passwor} =user
    const result= await firebase.auth().createUserWithEmailAndPassword(email,password);
    await queryUser().doc(result.user.uid).set({
        email:email,
    })
}

export const Singout = async ()=>{
    await firebasebase.auth().singOut();
};

export const onAuthChanged = (response)=>{
    firebase.auth().onAuthStateChanged(response);
};
