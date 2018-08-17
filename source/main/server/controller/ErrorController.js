const ErrorController = (error, request, response, next) => {
  console.log(error, next.name);

  response.status(500);
  response.json({ error: error.name });
};

export default ErrorController;
