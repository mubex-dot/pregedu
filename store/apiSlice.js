import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import * as SecureStore from "expo-secure-store";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://outgoing-flowing-ladybird.ngrok-free.app",
    prepareHeaders: async (headers) => {
      const token = await SecureStore.getItemAsync("access_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    chatWithBot: builder.mutation({
      query: (body) => ({
        url: "/chat",
        method: "POST",
        body: body,
      }),
    }),
    fetchChat: builder.query({
      query: () => ({
        url: "/chat",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useChatWithBotMutation,
  useFetchChatQuery,
} = apiSlice;
