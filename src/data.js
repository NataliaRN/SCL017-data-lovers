export const toOrderAZ = (arrayrickymorty, orderType) => {
  if (orderType == 1) sortJSON(arrayrickymorty, "name", "asc");
  else sortJSON(arrayrickymorty, "name", "desc");

  return arrayrickymorty;
};
export const sortJSON = (data, key, order) => {
  return data.sort(function (a, b) {
    let x = a[key],
      y = b[key];
    if (order === "asc") {
      return x < y ? -1 : 1;
    }
    else{
      return x > y ? -1 : 1;
    }
  });
};