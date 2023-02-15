import { configureStore } from "@reduxjs/toolkit";
import { appApi } from "../api/api";
import { rootReducer } from "./root-reducer";

export const store = configureStore({
  reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(appApi.middleware)
})

export type TypeRootState = ReturnType<typeof rootReducer>