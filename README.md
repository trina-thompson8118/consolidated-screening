Consolidated Screening List Search Engine
=========================================

A **React-based web application** for searching the **Consolidated Screening List (CSL)**, a list of parties for which the US Government maintains export restrictions. This application enables users to search for restricted parties involved in export transactions, view detailed results, and navigate large datasets efficiently.

For a demo of this please visit [DEMO](https://consolidated-screening.vercel.app/).

Features
--------

-   **Search Functionality**: Enter a name or keyword to query the CSL.

-   **Detailed Results**: Expandable rows to view additional details.

-   **Pagination**: Smooth navigation through paginated data.

-   **Error Handling**: User-friendly error messages for invalid inputs or API issues.

-   **Loading Feedback**: Skeleton loader ensures a seamless user experience during data retrieval.

Technologies Used
-----------------

-   **React**: Frontend framework for building the user interface.

-   **Tailwind CSS**: Utility-first CSS framework for styling.

-   **Custom Components**:

    -   `Table`: Displays search results.

    -   `Pagination`: Manages pagination controls.

    -   `SkeletonLoader`: Provides a loading animation.

    -   `ErrorMessage`: Displays error messages.

-   **API Utility**: Custom function `fetchApiResults` for interacting with external data sources.

Installation
------------

1.  **Clone the repository:**

    ```
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**

    ```
    npm install
    ```

3.  **Start the development server:**

    ```
    npm run dev
    ```

4.  **Open the app:** Navigate to `http://localhost:3000` in your browser.

Usage
-----

1.  **Search:**

    -   Enter a search term in the input field and click "Search".

    -   Results are displayed in a table with expandable rows for additional details.

2.  **Pagination:**

    -   Use pagination controls to navigate between pages if there are more than 10 results.

3.  **Error Handling:**

    -   If an error occurs (e.g., no search term or API failure), a user-friendly message is displayed.

4.  **Loading Feedback:**

    -   A skeleton loader is displayed while data is being fetched.

Deployment
----------

1.  **Build the project:**

    ```
    npm run build
    ```

2.  **Start the production server:**

    ```
    npm start
    ```

3.  **Deploy:** Deploy the project to your preferred hosting service (e.g., Vercel, Netlify).

Future Enhancements
-------------------

-   Add advanced search filters for more precise queries.

-   Include export options for search results (e.g., CSV, PDF).

-   Add dark mode for enhanced usability.

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
---------------

-   **trade.gov**: For providing the Consolidated Screening List.
-   **Open-Source Tools**: Libraries and frameworks used in this project.