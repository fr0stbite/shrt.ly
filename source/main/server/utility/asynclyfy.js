const asynclyfy = callable => (...args) => {
  const promise = callable(...args);
  const next = args[args.length - 1];

  Promise.resolve(promise)
    .catch(next);
};

export default asynclyfy;
