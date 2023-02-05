import { Dispatch, SetStateAction } from 'react'
import isPlainObject from "lodash/isPlainObject";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { normalizedApiData } from "../actions";

type Meta = {
    setLoading?: Dispatch<SetStateAction<number>>;
    onResponse?: {
        successCallback?: (response: any) => Promise<void> | void;
        errorCallback?: (error: any) => Promise<void> | void;
    };
};

export const createRequest =
    <T = void>(
        type: string,
        {
            method,
            endpoint,
            transformResponse,
        }: {
            method: "get" | "put" | "post" | "delete" | "patch";
            endpoint: (params: T) => string;
            transformResponse?: (data: any) => any;
        }
    ) =>
    (payload: T, meta?: Meta) =>
        createAsyncThunk(type, async ([data, meta]: [T, Meta?], thunkApi) => {
            meta?.setLoading?.(currCount => currCount + 1);
            let resolve: any;
            try {
                // const userSession = await Auth.currentSession();
                const jwtToken = userSession.getIdToken().getJwtToken();
                const res = await axios.request({
                    url: endpoint(data),
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`,
                    },
                    data: method === "post" ? data : undefined,
                    params: method === "get" ? data : undefined,
                });
                const response = transformResponse
                    ? transformResponse(res.data)
                    : res.data;
                await meta?.onResponse?.successCallback?.(response);
                resolve = thunkApi.fulfillWithValue(response);
                if (isPlainObject(response)) {
                    thunkApi.dispatch(
                        normalizedApiData({
                            OGActionType: type,
                            data: response,
                        })
                    );
                }
            } catch (error: any) {
                const axiosError: AxiosError = error;
                await meta?.onResponse?.errorCallback?.(axiosError.response);
                resolve = thunkApi.rejectWithValue(axiosError.response);
            }
            meta?.setLoading?.(currCount => currCount  - 1);
            return resolve;
        })([payload, meta]);
