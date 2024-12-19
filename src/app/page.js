"use client";

import React, { useState, useEffect } from "react";
import { fetchApiResults } from "@/app/utils/screeningListApi";
import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import SkeletonLoader from "@/app/components/SkeletonLoader"; // Import SkeletonLoader
import ErrorMessage from "@/app/components/ErrorMessage";

export default function Home() {
  const [data, setData] = useState([]); // Stores search results
  const [totalResults, setTotalResults] = useState(0); // Tracks total number of results for pagination
  const [error, setError] = useState(null); // Holds error messages, if any
  const [query, setQuery] = useState(""); // Tracks the search query entered by the user
  const [loading, setLoading] = useState(false); // Tracks loading during pagination
  const [currentPage, setCurrentPage] = useState(1); // Keeps track of the current page for pagination
  const [expanded, setExpanded] = useState(null); // Tracks which table row is expanded for additional details
  const [isSearching, setIsSearching] = useState(false); // Tracks whether a search has been performed

  /**
  * Handles the search functionality.
  * Fetches results from the API for the given query and resets the pagination.
  */
  const handleSearch = async (event) => {
    event.preventDefault();

    // Validate the query input
    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }

    // Reset states and initialize loading
    setLoading(true);
    setError(null);
    setData([]);
    setCurrentPage(1);
    setIsSearching(true);

    try {
      const result = await fetchApiResults(query, 1);
      setData(result.results || []);
      setTotalResults(result.total || 0);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
  * Handles pagination when navigating between pages.
  * Updates the results based on the selected page.
  */
  const handlePageChange = async (pageNumber) => {
    // Prevent redundant API calls for the current page
    if (pageNumber === currentPage) return;
    setLoading(true);
    setCurrentPage(pageNumber);

    try {
      const result = await fetchApiResults(query, pageNumber);
      setData(result.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Toggles the expanded state for table rows.
   * Allows showing or hiding additional row details.
   */
  const toggleDetails = (id) => {
    const newExpandedState = expanded === id ? null : id;
    setExpanded(newExpandedState);
  };

  return (
    <div className="flex justify-center py-6 font-sans">
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold text-center">
          Consolidated Screening List Search Engine
        </h1>

        {/* Introductory text (only displayed before searching) */}
        {!isSearching && (
          <p className="text-gray-600 text-center">
            The Consolidated Screening List (CSL) is a list of parties for which
            the US Government maintains export restrictions. Use this tool to
            search for restricted parties involved in export transactions.
          </p>
        )}

        {/* Search form */}
        <form
          onSubmit={handleSearch}
          className="flex space-x-4 items-center"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a name to search"
            className="border px-4 py-2 flex-grow rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </form>

        {/* Display error messages if any */}
        {error && <ErrorMessage error={error} />}

        {/* Show either the Skeleton Loader or the Table */}
        <div className="relative">
          {loading ? (
            <SkeletonLoader /> // Show skeleton loader while loading
          ) : (
            data.length > 0 && (
              <Table data={data} expanded={expanded} toggleDetails={toggleDetails} />
            )
          )}
        </div>

        {/* Display message if no results are found */}
        {!loading && isSearching && data.length === 0 && (
          <div className="text-center text-gray-600 mt-4">
            <p className="text-lg font-semibold">No results found.</p>
            <p>Try refining your search query and try again.</p>
          </div>
        )}

        {/* Pagination component */}
        {totalResults > 10 && (
          <Pagination
            totalPages={Math.ceil(totalResults / 10)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
