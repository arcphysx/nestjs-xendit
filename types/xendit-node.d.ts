declare type RequestCredentials = "include" | "omit" | "same-origin";
declare type RequestInfo = Request | string;
declare interface WindowOrWorkerGlobalScope {
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}