// import { createSelector } from "@reduxjs/toolkit";

// const selectAuth = state => state.auth;


// export const selectAuthIsloading = state => createSelector([selectAuth], auth => auth.isLoading);
// export const selectAuthError = state => createSelector([selectAuth], auth => auth.error);
// export const selectAuthToken = state => createSelector([selectAuth], auth => auth.token);
// export const selectAuthUserData = state => createSelector([selectAuth], auth => auth.user);
// export const selectAuthIsSignedIn = state =>
//   createSelector([selectAuth], auth => auth.isSignedIn);
    
export const selectAuthIsloading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selectAuthToken = state => state.auth.token;
export const selectAuthUserData = state => state.auth.user;
export const selectAuthIsSignedIn = state => state.auth.isSignedIn;