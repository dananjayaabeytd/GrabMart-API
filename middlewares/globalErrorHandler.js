export const globalErrorHandler = (err, req, res, next) => {
  
  //stack
  const stack = err?.stack;
  
  //status code
  const statusCode = err?.statusCode ? err?.statusCode : 500;

  //message
  const message = err?.message;
  
  res.status(statusCode).json({
    stack,
    message,
  });

};

//404 handler
export const notFound = (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} not found`);
    next(err);
};
