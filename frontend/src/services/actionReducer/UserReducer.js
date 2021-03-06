import { createSlice } from "@reduxjs/toolkit";

/**
* The "main" reducer
*
* @return state
*/

const initialState = {
  token: "",
  firstname: "",
  lastname: "",
  editName: false,
};

const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: {
      prepare: (token) => ({ payload: { token } }),
      reducer: (draft, action) => {
        draft.token = action.payload.token;
      },
    },
    userLogout: {
      reducer: () => {
        return initialState;
      },
    },
    userData: {
      prepare: (firstname, lastname) => ({ payload: { firstname, lastname } }),
      reducer: (draft, action) => {
        draft.firstname = action.payload.firstname;
        draft.lastname = action.payload.lastname;
      }
    },
    edit: {
      reducer: (draft) => {
        draft.editName = !draft.editName;
      },
    },
    userEdition: {
      prepare: (body) => ({
        payload: { firstName: body.firstName, lastName: body.lastName },
      }),
      reducer: (draft, action) => {
        if (draft.editName === true) {
          draft.firstname = action.payload.firstName;
          draft.lastname = action.payload.lastName;
          draft.editName = false;
        }
      },
    },
  },
});

export const { login, userLogout, userData, edit, userEdition } = actions;

export default reducer;