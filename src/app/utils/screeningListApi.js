export const fetchApiResults = async (query, page) => {
  // Get the base URL for the API from environment variables
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || ""; // Use a fallback empty string if the variable is not set.

  // Construct the full API URL with query parameters
  const url = `${baseUrl}/api/fetchResults?name=${encodeURIComponent(query)}&page=${page}`;

  try {
    // Make the fetch request to the API
    const response = await fetch(url);

    // Check if the response status indicates success
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); 
    }

    // Parse and return the response JSON
    return await response.json();
  } catch (error) {
    // Handle any errors encountered during the fetch request
    console.error("Error fetching API results:", error); // Log errors for debugging.
    throw error; 
  }
};
