import { createSelector } from "@reduxjs/toolkit";

const selectAuth = state => state.auth;


export const selectAuthIsloading = state => createSelector(selectAuth, auth => auth.isLoading);
export const selectAuthError = state => createSelector(selectAuth, auth => auth.error);
export const selectAuthToken = state => createSelector(selectAuth, auth => auth.token);
export const selectAuthUserData = state => createSelector(selectAuth, auth => auth.user);
export const selectAuthisSingedIn = state => createSelector(selectAuth, auth => auth.isSingedIn);
    
