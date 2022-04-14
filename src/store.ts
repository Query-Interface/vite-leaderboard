import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./rootReduser";

const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;