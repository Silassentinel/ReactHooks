import { persistReducer } from "redux-persist";
import { rootReducer } from "./rootReducer";
import { persistConfig } from "./persistConfig";
export const persistedReducer = persistReducer(persistConfig, rootReducer);
// dient voor het opslaan van de store op de local storage wat toelaat van de app te sluiten en te heropenen in dezelfde staat