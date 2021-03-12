# asynchronous-functions-and-objects-example
Code example exemplifying asynchronous functions being passed thru event loop to return a asynchronous object

The async function() defines an asynchronous function that returns an AsyncFunction object. This function operates asynchronously via the event loop using an implicit Promise to return a value. The only difference is that the syntax of async functions is more similar to synchronous functions than promises, so if you’re more accustomed to synchronous code, async functions are the way to go for you.
An async function can contain await expression that pauses the execution of the async function and awaits for the passed promise resolution or rejection. It then resumes the async method and returns a resolved value.
Note: The await keyword is only valid inside async functions, a SyntaxError will be raised if used outside async functions.
