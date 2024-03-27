import { loginApi, getCurrentUserApi } from 'api/auth';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
// import { StoreContext } from './useStore';

export const useAuth = () => {
//   const { dispatch, state } = useContext(StoreContext);
  const queryClient = useQueryClient();

  const setUser = useCallback((data) => {
    dispatch({
      type: 'setUser',
      payload: data,
    });
  }, []);

  const logout = useCallback(() => {
    dispatch({
      type: 'logout',
    });
    window.location = '/';
  }, []);

  const loginMutation = useMutation((payload) => loginApi(payload), {
    onSuccess: (res) => {
      dispatch({
        type: 'loginSuccess',
        payload: res,
      });
    },
    onError: () => {
      dispatch({
        type: 'loginFail',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries('auth/signin');
    },
  });


  const registerMutation = useMutation((payload) => requestToJoinApi(payload), {
    onSuccess: (res) => {
      dispatch({
        type: 'registerSuccess',
        payload: res,
      });
    },
    onError: () => {
      dispatch({
        type: 'registerFail',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries('public/um/applicant/register');
    },
  });

  const currentUserMutation = useMutation((payload) => getCurrentUserApi(payload), {
    onSuccess: (res) => {
      dispatch({
        type: 'currentUserSuccess',
        payload: res,
      });
    },
    onError: () => {
      dispatch({
        type: 'currentUserFail',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries('auth/signin');
    },
  });

  const login = async (data) => {
    try {
      dispatch({
        type: 'login',
      });
      await loginMutation.mutateAsync(data);
    } catch (error) {
      //
    }
  };


  const register = async (data) => {
    try {
      dispatch({
        type: 'register',
      });
      await registerMutation.mutateAsync(data);
    } catch (error) {
      //
    }
  };

  const getCurrentUser = async (data) => {
    try {
      // dispatch({
      //   type: 'currentUser',
      // });
      await currentUserMutation.mutateAsync(data);
    } catch (error) {
      //
    }
  };

  return {
    user: state.user,
    login,
    logout,
    setUser,
    register,
    getCurrentUser,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    loginError: loginMutation.error,
    registerSuccess: registerMutation.isSuccess,
    registrationError: registerMutation.error
  };
};

