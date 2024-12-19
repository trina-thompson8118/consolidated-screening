import { NextResponse } from "next/server"; // Import Next.js server response utility for API routes.

export async function GET(request) {
  // Parse query parameters from the request URL
  const { searchParams } = new URL(request.url); 
  const name = searchParams.get("name") || ""; // Extract the 'name' parameter, default to an empty string if not provided.
  const page = parseInt(searchParams.get("page") || "1"); // Extract the 'page' parameter, default to page 1.
  const resultsPerPage = 10; // Define a constant for the number of results per page.

  // Construct the external API URL with query parameters
  const apiUrl = `https://data.trade.gov/consolidated_screening_list/v1/search?name=${encodeURIComponent(
    name
  )}&offset=${(page - 1) * resultsPerPage}&limit=${resultsPerPage}`;

  // Set headers for the API request, including the subscription key for authentication
  const headers = {
    "subscription-key": process.env.NEXT_PUBLIC_SUBSCRIPTION_KEY, // Use environment variable for security.
  };

  try {
    // Fetch data from the external API
    const response = await fetch(apiUrl, { headers });

    if (!response.ok) {
      // Handle HTTP errors from the external API
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the response JSON
    return NextResponse.json(data); // Return the JSON response to the client
  } catch (error) {
    // Log errors to the server for debugging purposes
    console.error("Error fetching external API data:", error);

    // Return an error response to the client
    return NextResponse.json(
      { error: "Failed to fetch data from the external API" }, 
      { status: 500 } 
    );
  }
}
