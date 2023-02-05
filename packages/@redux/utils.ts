import { createAction } from "@reduxjs/toolkit";
import {
    // TParticipant,
    // ResponseAction,
    RequestApiData,
    RequestMeta,
    RequestData,
    // APIError,
    // ApiResponse,
    // TContentBlock,
} from "./types";

const REACT_API_BASE_URL = ""

// const patchChannelRequest = createRequest<PayloadType>("patchChannelRequest", {
//   method: "get",
//   endpoint: (payload) => patchChannelEndpoint(payload),
//   transformResponse: (responseData, payload) => ({
//     channels: responseData,
//     patientId: payload.patientId,
//   }),
// });
export const createRequest = <P = void>(type: string, api: RequestApiData<P>) =>
    createAction(
        type,
        (payload: P, meta?: RequestMeta): RequestData<P> => ({
            payload,
            meta: {
                ...meta,
                api,
            },
        })
    );


export const apiUrl = (endpoint: string) => `${REACT_API_BASE_URL}${endpoint}`;
