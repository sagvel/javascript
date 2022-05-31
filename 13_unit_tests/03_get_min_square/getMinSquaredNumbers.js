export default arr => {
  if (!Array.isArray(arr) || !arr.length) {
    return null;
  }
  return (
    Math.min.apply(
      null,
      arr.map(el => Math.abs(el)),
    ) ** 2
  );
};
