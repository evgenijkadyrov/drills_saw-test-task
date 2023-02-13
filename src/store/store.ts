import {ActionsType as DrillsAction, drillsReducer,} from "./drills-reducer";
import {ActionsType as CartAction, cartReducer} from "./cart-reducer"
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
// export const store = configureStore({
//     reducer: {
//          drills: drillsReducer,
//
//     },
// })
const rootReducer = combineReducers({
    drills: drillsReducer,
    cart:cartReducer
})
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>

type ActionsType = DrillsAction | CartAction
export type ActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never