import { 
  SET_ACTIVE_ROUTE
 } from "./types";

export const setActiveRoute = (name) => {
  return {
    type: SET_ACTIVE_ROUTE,
    payload: name,
  };
}