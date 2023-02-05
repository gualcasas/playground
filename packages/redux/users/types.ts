export type AuthEvent = {
    event:
        | "autoSignIn"
        | "signIn"
        | "signUp"
        | "signOut"
        | "signIn_failure"
        | "tokenRefresh"
        | "tokenRefresh_failure"
        | "configured";
    message: string;
    data: object | null;
};

export type TUser = {
    id: string;
    organization_id?: string;
    name: string;
    email: string;
    type: "Basic" | "Organization Admin" | "Reviewer" | "Super Admin";
    email_notify: boolean;
    zoom_tokens?: object;
    zoom_details?: object;
    default_template_id: string;
    playground_document_id: string;
    default_share_with_org: boolean;
};

export type UsersState = {
    currentUserId: string | null;
    byId: { [id: string]: TUser };
};
