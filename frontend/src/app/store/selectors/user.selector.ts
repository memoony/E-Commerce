import { ActionReducer, INIT, UPDATE } from "@ngrx/store";

export const metaReducerUserLocalStorage = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type == UPDATE) {
      const storageValue = localStorage.getItem('User');

      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem('User');
        }
      }
    }

    const nextState = reducer(state, action);
    localStorage.setItem('User', JSON.stringify(nextState));

    return nextState;
  };
};
