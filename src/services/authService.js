import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { apiKey, baseAuthUrl } from "../databases/users"

export const authApi = createApi({
<<<<<<< HEAD
    reducerPath: "authApi", //Establish a unique name for the API
=======
    reducerPath: "authApi", 
>>>>>>> 77aa8dc1b75ce4fa9a0eba4af60de805dd490466
    baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: ({ ...auth }) => ({
                url: `/accounts:signUp?key=${apiKey}`,
                method: "POST",
                body: auth,
            }),
        }),
        //Add login
        signIn: builder.mutation({
            query: ({...auth}) => ({
                url: `/accounts:signInWithPassword?key=${apiKey}`,
                method: "POST",
                body: auth
            })
        })
    }),
})

export const { useSignInMutation, useSignUpMutation } = authApi
