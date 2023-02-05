import { createAction } from "@reduxjs/toolkit";
import { NormalizedApiData } from "../types";

export const normalizedApiData = createAction<{
    OGActionType: string;
    data?: NormalizedApiData;
}>("assignNormalizedValues");
