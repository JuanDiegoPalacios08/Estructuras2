import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase/config";
import {signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut} from 'firebase/auth'

// Thunk para login con email/contraseña
export const loginWithEmail = createAsyncThunk(
    'auth/loginWithEmail',
    async ({ email, password }, thunkAPI) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user; // Devuelve el usuario para guardarlo en el estado
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  // Thunk para login con Google
  export const loginWithGoogle = createAsyncThunk(
    'auth/loginWithGoogle',
    async (_, thunkAPI) => {
      try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        return userCredential.user; // Devuelve el usuario
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  // Thunk para logout
  export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
      try {
        await signOut(auth);
        return true; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  const authSlice = createSlice({
    name: 'auth',
    initialState: {
      user: null,
      status: 'idle', // idle | loading | succeeded | failed
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      // Login con Email/Password
      builder
        .addCase(loginWithEmail.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(loginWithEmail.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.user = action.payload;
        })
        .addCase(loginWithEmail.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
  
        // Login con Google
        .addCase(loginWithGoogle.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(loginWithGoogle.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.user = action.payload;
        })
        .addCase(loginWithGoogle.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
  
        // Logout
        .addCase(logout.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(logout.fulfilled, (state) => {
          state.status = 'idle';
          state.user = null;
        })
        .addCase(logout.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });
    }
  });
  
  export default authSlice.reducer;