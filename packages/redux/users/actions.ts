import { createAction } from "@reduxjs/toolkit";
import { AuthEvent } from "../types";

export const setCurrentUserId = createAction<string | null>("setCurrentUserId");

export const authEvent = createAction<AuthEvent>("authEvent");

export const logout = createAction<{ reason: string }>("logout");
