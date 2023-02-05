import { createAction } from "@reduxjs/toolkit";
import { AssignNormalizedData } from "../types";

export const assignNormalizedValues = createAction<{
    OGActionType: string;
    data?: AssignNormalizedData;
}>("assignNormalizedValues");
