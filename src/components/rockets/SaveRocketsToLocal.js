const SaveRocketsToLocal = (data) => {
  localStorage.setItem('rockets', JSON.stringify(Array.from(data)));
};

export default SaveRocketsToLocal;
