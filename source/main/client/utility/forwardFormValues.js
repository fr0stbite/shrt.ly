const forwardFormValues = (submit, ...selectors) => event => {
  event.preventDefault();

  const values = selectors
    .map(selector => document.querySelector(selector))
    .map(element => element.value);

  submit(...values);
};

export default forwardFormValues;
