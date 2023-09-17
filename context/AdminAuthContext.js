import React, { useEffect, useReducer, createContext } from "react";
import { authApi } from "mocks/admin-auth";

const initialAuthState = {
  isAuthenticated: false,
  isInitialized: false,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

// create context
export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("admin-accessToken");

        if (accessToken) {
          const user = await authApi.me(accessToken);

          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email, password) => {
    const accessToken = await authApi.login({ email, password });
    const user = await authApi.me(accessToken);

    localStorage.setItem("admin-accessToken", accessToken);

    dispatch({
      type: "LOGIN",
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    localStorage.removeItem("admin-accessToken");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AdminAuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const AdminAuthConsumer = AdminAuthContext.Consumer;
