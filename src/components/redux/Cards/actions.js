import { FETCH_DATA, PATCH_DATA } from "./types";

const getUrl = "http://localhost:4000/api/profiles";
const patchUrl = "http://localhost:4000/api/update-profile/";

export const fetchData = () => {
  return async (dispatch) => {
    const responce = await fetch(getUrl);
    const json = await responce.json();
    dispatch({ type: FETCH_DATA, payload: json });
  };
};

export const patchData = (editData) => {
  console.log("editData", editData);
  return async (dispatch) => {
    const json = JSON.stringify(editData);
    const responce = await fetch(`${patchUrl}${editData.id}`, {
      method: "PATCH",
      body: json,
      headers: { "Content-Type": "application/json" },
    });
    const data = await responce.json();
    dispatch({ type: PATCH_DATA, payload: data });
    dispatch(fetchData());
  };
};
