
import { configureStore } from "@reduxjs/toolkit";
import { pubilicApi } from "cart/pubilicApi"
import { cartApi } from "cart/cartApi"
import { authApi } from "auth/authApi"
import { addressApi } from "auth/addressApi"
import { orderApi } from "order/redux/order.api"
import { adminApi } from "admin/adminApi"
import { adminauthApi } from "admin/adminauthApi"
import authSlice from "auth/authSlice"
import adminauthSlice from "admin/adminauthSlice"

console.log(adminauthApi, "adminAPi");




const reduxStore = configureStore({
    reducer: {
        [pubilicApi.reducerPath]: pubilicApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [addressApi.reducerPath]: addressApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [adminauthApi.reducerPath]: adminauthApi.reducer,
        auth: authSlice,
        adminauth: adminauthSlice


    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pubilicApi.middleware, cartApi.middleware, authApi.middleware, addressApi.middleware, orderApi.middleware, adminApi.middleware, adminauthApi.middleware),
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch

export default reduxStore