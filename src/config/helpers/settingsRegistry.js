let data = null;

export const set = (obj) => {
  data = obj;
};

export const get = () => {
  if (data !== null) {
    return data;
  }
  return new Error('The data is NULL');
};
