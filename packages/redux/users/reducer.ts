import { forEach, assign, omitBy, isNil } from "lodash";
// import LogRocket from "logrocket";
import { createReducer } from "@reduxjs/toolkit";
import { setCurrentUserId, assignNormalizedValues } from "../actions";
import { UsersState } from "./types";

const initialState: UsersState = {
    currentUserId: null,
    byId: {},
};

export const usersReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(setCurrentUserId, (state, { payload }) => {
            // if (payload) LogRocket.identify(payload);
            state.currentUserId = payload;
        })
        .addCase(assignNormalizedValues, (state, { payload }) => {
            forEach(payload.data?.users, (user) => {
                state.byId[user.id] = assign(
                    {},
                    state.byId[user.id] ?? {},
                    omitBy(user, isNil)
                );
            });
        })
);
