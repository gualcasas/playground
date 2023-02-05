import { apiUrl, createRequest } from "../utils";
import { TUser } from "../types";

const endpoints = {
    currentUser: () => apiUrl("/users/me"),
    zoomCode: () => apiUrl("/zoom/code"),
    zoomRecordings: () => apiUrl("/zoom/recordings"),
    zoomUserDetails: () => apiUrl("/zoom/user-details"),
};

export const updateCurrentUserRequest = createRequest<{
    payload: Omit<Partial<TUser>, "id">;
}>("updateCurrentUserRequest", {
    method: "put",
    endpoint: endpoints.currentUser,
});

export const getCurrentUserRequest = createRequest("getCurrentUserRequest", {
    method: "get",
    endpoint: endpoints.currentUser,
});

export const submitZoomCodeRequest = createRequest<{ code: string }>(
    "submitZoomCodeRequest",
    {
        method: "post",
        endpoint: endpoints.zoomCode,
    }
);

export const getZoomRecordingsRequest = createRequest(
    "getZoomRecordingsRequest",
    {
        method: "get",
        endpoint: endpoints.zoomRecordings,
    }
);

export const getZoomUserDetails = createRequest("getZoomUserDetails", {
    method: "get",
    endpoint: endpoints.zoomUserDetails,
});

export const importZoomRecordingsRequest = createRequest<{
    meetings: Array<{ download_url: string; name: string }>;
}>("importZoomRecordingsRequest", {
    method: "post",
    endpoint: endpoints.zoomRecordings,
});
