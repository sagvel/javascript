// input: nothing
// output: object

export function getLocalStorageData() {
  return (
    Object.entries(localStorage).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {},
    ) || {}
  );
}
