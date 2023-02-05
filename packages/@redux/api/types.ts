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
};

export type NormalizedApiData = {
    users?: TUser[];
};
