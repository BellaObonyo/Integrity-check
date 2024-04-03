import { loginApi, registerApi } from "api/auth"
import { useCallback, useContext} from "react"
import { useMutation, useQueryClient } from "react-query"
import { StoreContext } from "./useStore"

export const useAuth = () => {
  const { dispatch, state } = useContext(StoreContext)
  const queryClient = useQueryClient()

  const setUser = useCallback(data => {
    dispatch({
      type: "setUser",
      payload: data,
    })
  }, [])

  const logout = useCallback(() => {
    dispatch({
      type: "logout",
    })
    window.location = "/"
  }, [])

  const loginMutation = useMutation(payload => loginApi(payload), {
    onSuccess: res => {
      dispatch({
        type: "loginSuccess",
        payload: res,
      })
    },
    onError: () => {
      dispatch({
        type: "loginFail",
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries("auth/login")
    },
  })

  const registerMutation = useMutation(payload => registerApi(payload), {
    onSuccess: res => {
      dispatch({
        type: "registerSuccess",
        payload: res,
      })
    },
    onError: () => {
      dispatch({
        type: "registerFail",
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries("auth/signup")
    },
  })

  const login = async data => {
    try {
      dispatch({
        type: "login",
      })
      await loginMutation.mutateAsync(data)
    } catch (error) {
      //
    }
  }

  const register = async data => {
    try {
      dispatch({
        type: "register",
      })
      await registerMutation.mutateAsync(data)
    } catch (error) {
      //
    }
  }

  return {
    user: state.user,
    login,
    logout,
    setUser,
    register,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    loginError: loginMutation.error,
    loginSuccess: loginMutation.isSuccess,
    registerSuccess: registerMutation.isSuccess,
    registrationError: registerMutation.error,
  }
}
