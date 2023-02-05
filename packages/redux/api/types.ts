import { Action } from "@reduxjs/toolkit";
import { TUser } from "../types";

export type APIError = {
    code: string;
    message: string;
};

export type ApiState = {
    isFetching: { [context: string]: { [actionType: string]: boolean } };
    pagination: {
        [context: string]: {
            [actionType: string]: {
                results?: number;
                total?: number;
                page?: number;
                next?: string;
            };
        };
    };
    errors: {
        [context: string]: {
            [actionType: string]: ApiResponse<APIError> | undefined;
        };
    };
};

export type RequestMeta = {
    context?: string;
    onResponse?: {
        callback?: () => void;
        successCallback?: (data: AssignNormalizedData | object) => void;
        errorCallback?: (data: { detail?: string }) => void;
    };
};

export type RequestApiData<P = void> =
    | {
          method: "post" | "get" | "patch" | "delete" | "put";
          endpoint: (payload: P) => string;
          transformResponse?: (data: object, payload: P) => object;
          overrideHeaders?: { [headerKey: string]: string };
      }
    | {
          method: "submit";
      };

export type RequestData<P = void> = {
    payload: P;
    meta: RequestMeta & {
        api: RequestApiData<P>;
    };
};

export type ApiResponse<T = object> = {
    data?: T;
    status?: number;
};

export type ResponseData<T = object> = {
    payload?: ApiResponse<T>;
    meta: {
        context?: string;
        requestStep: "success" | "error";
        OGActionType: string;
    };
};

export type RequestAction<T = unknown> = Action & RequestData<T>;
export type ResponseAction<T = unknown> = Action & ResponseData<T>;

export type AssignNormalizedData = {
    users?: TUser[];
};
