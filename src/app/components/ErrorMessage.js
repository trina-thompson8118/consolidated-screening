import React from "react"; 

const ErrorMessage = ({ error }) => {
  // If there is no error, render nothing.
  if (!error) return null;

  return (
    <p className="text-red-500">
      {/* Check the error message content to provide a user-friendly message */}
      {error.includes("HTTP error")
        ? "The server is unreachable or encountered an issue. Please try again later." // Custom message for HTTP-related errors.
        : error} {/* Display the raw error message for other cases. */}
    </p>
  );
};

export default ErrorMessage; // Export the component for use in other parts of the application.
