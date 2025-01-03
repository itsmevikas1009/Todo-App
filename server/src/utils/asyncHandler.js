// Define a utility function to handle asynchronous middleware
const asyncHandler = (requestHandler) => (req, res, next) => {
    // Resolve the promise returned by the request handler and catch any errors
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
}

// Export the asyncHandler function for use in other modules
export { asyncHandler }