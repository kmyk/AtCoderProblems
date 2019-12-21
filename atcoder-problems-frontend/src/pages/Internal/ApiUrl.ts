const BASE_URL = "https://kenkoooo.com/atcoder/internal-api";
// const BASE_URL = "http://localhost/internal-api";

export const USER_GET = `${BASE_URL}/user/get`;
export const USER_UPDATE = `${BASE_URL}/user/update`;

export const contestGetUrl = (contestId: string) =>
  `${BASE_URL}/contest/get/${contestId}`;
export const CONTEST_MY = `${BASE_URL}/contest/my`;
export const CONTEST_UPDATE = `${BASE_URL}/contest/update`;
export const CONTEST_JOIN = `${BASE_URL}/contest/join`;
export const CONTEST_JOINED = `${BASE_URL}/contest/joined`;
export const CONTEST_CREATE = `${BASE_URL}/contest/create`;
export const CONTEST_RECENT = `${BASE_URL}/contest/recent`;
export const CONTEST_ITEM_UPDATE = `${BASE_URL}/contest/item/update`;

export const LIST_MY = `${BASE_URL}/list/my`;
export const LIST_CREATE = `${BASE_URL}/list/create`;
export const LIST_DELETE = `${BASE_URL}/list/delete`;
export const LIST_UPDATE = `${BASE_URL}/list/update`;
export const LIST_ITEM_UPDATE = `${BASE_URL}/list/item/update`;
export const LIST_ITEM_DELETE = `${BASE_URL}/list/item/delete`;
export const LIST_ITEM_ADD = `${BASE_URL}/list/item/add`;
export const listGetUrl = (listId: string) => `${BASE_URL}/list/get/${listId}`;
