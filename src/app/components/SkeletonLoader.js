import React from "react";

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    {/* Simulate table header */}
    <div className="flex bg-gray-200 rounded h-8">
      <div className="h-full bg-gray-300 rounded w-1/3 mx-2"></div>
      <div className="h-full bg-gray-300 rounded w-1/3 mx-2"></div>
      <div className="h-full bg-gray-300 rounded w-1/3 mx-2"></div>
    </div>

    {/* Simulate table rows */}
    {[...Array(5)].map((_, index) => (
      <div
        key={index}
        className="flex items-center bg-gray-100 rounded h-8"
      >
        <div className="h-full bg-gray-300 rounded w-1/3 mx-2"></div>
        <div className="h-full bg-gray-300 rounded w-1/3 mx-2"></div>
        <div className="h-full bg-gray-300 rounded w-1/3 mx-2"></div>
      </div>
    ))}
  </div>
);

export default SkeletonLoader;
