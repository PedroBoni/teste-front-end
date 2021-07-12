const isEmpty = (value) => {
  if (!value) return true;
  if (value === "" || value === [] || value === {}) return true;
  return false;
};
