export const reverseArr = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return [...arr].reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);

  return balances[index] > amount ? balances[index] - amount : -1;
};

export const getAdults = obj => {
  const MAX_AGE = 18;
  const result = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (obj[key] >= MAX_AGE) {
      result[key] = obj[key];
    }
  }

  return result;
};
