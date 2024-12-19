import React from "react";

// The Table component displays data in a table with expandable rows for additional details.
const Table = ({ data, expanded, toggleDetails }) => {
  // If no data is provided, do not render the table.
  if (!data || data.length === 0) return null;

  return (
    <div className="max-w-full overflow-x-auto"> {/* Prevent table overflow */}
      <table className="min-w-full table-fixed border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {/* Column headers */}
            <th className="border border-gray-300 px-4 py-2 w-1/3 whitespace-nowrap">Name</th>
            <th className="border border-gray-300 px-4 py-2 w-1/3 whitespace-nowrap">Type</th>
            <th className="border border-gray-300 px-4 py-2 w-1/3 truncate max-w-[150px]">Source</th>
          </tr>
        </thead>
        <tbody>
          {data.map((result) => (
            <React.Fragment key={result.id}>
              <tr
                className="cursor-pointer hover:bg-gray-100"
                onClick={() => toggleDetails(result.id)}
              >
                {/* Name column fully visible */}
                <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{result.name}</td>

                {/* Type column */}
                <td className="border border-gray-300 px-4 py-2">{result.type || "N/A"}</td>

                {/* Source column with truncation and tooltip */}
                <td
                  className="border border-gray-300 px-4 py-2 truncate overflow-hidden text-ellipsis max-w-[150px]"
                  title={result.source || "N/A"} // Tooltip for full value on hover
                >
                  {result.source || "N/A"}
                </td>
              </tr>
              {expanded === result.id && (
                <tr>
                  <td colSpan="3" className="border border-gray-300 px-4 py-2">
                    <table className="table-auto border-collapse w-full">
                      <tbody>
                        {[
                          { label: "Source", value: result.source || "N/A" },
                          { label: "Entity Number", value: result.entity_number || "N/A" },
                          { label: "Type", value: result.type || "N/A" },
                          { label: "Name", value: result.name },
                        ].map((detail, index) => (
                          <tr key={index}>
                            <td className="border px-4 py-2 font-bold">{detail.label}</td>
                            <td className="border px-4 py-2">{detail.value}</td>
                          </tr>
                        ))}
                        <tr>
                          <td className="border px-4 py-2 font-bold">Source List URL</td>
                          <td className="border px-4 py-2">
                            <a
                              href={result.source_list_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500"
                            >
                              {result.source_list_url || "N/A"}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-bold">Source Information URL</td>
                          <td className="border px-4 py-2">
                            <a
                              href={result.source_information_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500"
                            >
                              {result.source_information_url || "N/A"}
                            </a>
                          </td>
                        </tr>
                        {[
                          { label: "Programs", list: result.programs },
                          { label: "Alternative Names", list: result.alt_names },
                          { label: "Nationalities", list: result.nationalities },
                          { label: "Citizenships", list: result.citizenships },
                          { label: "Dates of Birth", list: result.dates_of_birth },
                          { label: "Places of Birth", list: result.places_of_birth },
                        ].map((detail, index) => (
                          <tr key={index}>
                            <td className="border px-4 py-2 font-bold">{detail.label}</td>
                            <td className="border px-4 py-2">
                              {detail.list?.length ? (
                                <ul className="list-disc list-inside">
                                  {detail.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              ) : (
                                "N/A"
                              )}
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td className="border px-4 py-2 font-bold">Addresses</td>
                          <td className="border px-4 py-2">
                            {result.addresses?.length ? (
                              <ol className="list-decimal list-inside">
                                {result.addresses.map((address, index) => (
                                  <li key={index}>
                                    {Object.values(address).filter(Boolean).join(", ")}
                                  </li>
                                ))}
                              </ol>
                            ) : (
                              "N/A"
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-bold">IDs</td>
                          <td className="border px-4 py-2">
                            {result.ids?.length ? (
                              <ol className="list-decimal list-inside">
                                {result.ids.map((id, index) => (
                                  <li key={index}>
                                    <strong>Type:</strong> {id.type || "N/A"},{" "}
                                    <strong>Number:</strong> {id.number || "N/A"},{" "}
                                    <strong>Country:</strong> {id.country || "N/A"}
                                  </li>
                                ))}
                              </ol>
                            ) : (
                              "N/A"
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
