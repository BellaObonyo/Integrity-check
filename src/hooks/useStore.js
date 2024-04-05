import { createContext, useReducer } from 'react';

const initialState = {
  user: null,
  configs: null,
  collapsed: 1,
  summaryData: {},
  isAuthenticated: !!localStorage.getItem('sessionToken'),
};

function reducer(state, action) {
  switch (action.type) {
    case 'setCollapsed':
      state.collapsed = action?.collapsed;
      return state;
    case 'setSummaryData':
      state.summaryData = {
        ...state.summaryData,
        ...action?.summaryData,
      }
      return state;
    case 'registerGoogle':
      state.isAuthenticated = true;
      localStorage.setItem('sessionToken', action?.token);
      return state;
    case 'setUser':
      state.user = action.payload;
      state.isAuthenticated = true;
      return state;
    case 'register':
      state.loading = true;
      return state;
    case 'registerSuccess':
      state.loading = false;
      // state.isAuthenticated = true;
      // localStorage.setItem('sessionToken', action?.payload?.accessToken);
      return state;
    case 'registerFail':
      state.loading = false;
      return state;
    case 'login':
      state.loading = true;
      return state;
    case 'loginSuccess':
      state.loading = false;
      state.isAuthenticated = true;
      console.log(action?.payload);
      localStorage.setItem('sessionToken', action?.payload?.data.token);
     
      return state;
    case 'loginFail':
      state.loading = false;
      return state;
    case 'currentUserSuccess':
      state.loading = false;
      state.memberId = action?.payload?.memberId;
      localStorage.setItem('user', JSON.stringify(action?.payload));
      state.user = action?.payload;
      return state;
    case 'currentUserFail':
      state.loading = false;
      return state;
    case 'logout':
      console.log("TO LOG OUT")
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('sessionToken');
  
      return state;
    case 'setConfigs':
      state.configs = action.configs;
      return state;
    default:
      throw new Error();
  }
}

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};

export const StoreContext = createContext({
  state: {},
  dispatch: () => { },
});
