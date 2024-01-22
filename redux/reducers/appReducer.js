const initialState = {
    themeMode: "light",
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return {
          ...state,
          themeMode: action.payload,
        };
      default:
        return state;
    }
  };