import React, { useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios"; // Ensure axios is imported

const TableHeader = ({ requests, fetchRequests }) => {
  const token = localStorage.getItem("token");

  const onApproveDataClick = useCallback(async (id) => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.patch(
        `http://localhost:5000/user/managerops/requests/${id}`,
        { status: "approved" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Assuming onRequestUpdate is a function passed down as a prop
      // Update UI after request is approved
      if (response.status === 200) {
        fetchRequests(); // Fetch updated requests
      } else {
        alert("Failed to approve request. Please try again.");
      }
    } catch (error) {
      console.error("Error approving request:", error);
      alert("Failed to approve request. Please try again.");
    }
  }, [token, fetchRequests]);

  const onRejectDataClick = useCallback(async (id) => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.patch(
        `http://localhost:5000/user/managerops/requests/${id}`,
        { status: "rejected" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Assuming onRequestUpdate is a function passed down as a prop
      // Update UI after request is rejected
      if (response.status === 200) {
        fetchRequests(); // Fetch updated requests
      } else {
        alert("Failed to reject request. Please try again.");
      }
    } catch (error) {
      console.error("Error rejecting request:", error);
      alert("Failed to reject request. Please try again.");
    }
  }, [token, fetchRequests]);

  if (!requests || requests.length === 0) {
    return (
      <div className="text-center p-10">
        <p>No requests found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mt-20 ml-[110px] max-h-[911.199951171875px] mq1024:gap-[16.80px] mq1024:pt-[85px] mq1024:pb-[114.8px] mq1024:w-full mq1280:pt-[61px] mq1280:pb-[82.2px]">
      <table className="w-full text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Client Name</th>
            <th className="px-4 py-2">Timestamp</th>
            <th className="px-4 py-2">Weight</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.client_id} className="border-b">
              <td className="px-4 py-2">{request.client_name}</td>
              <td className="px-4 py-2">
                {new Date(request.timestamp).toLocaleString()}
              </td>
              <td className="px-4 py-2">{request.weight}</td>
              <td className="px-4 py-2">{request.status}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => onApproveDataClick(request._id)}
                  className="mr-2 bg-green-500 text-white px-4 py-2 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => onRejectDataClick(request._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableHeader.propTypes = {
  requests: PropTypes.arrayOf(
    PropTypes.shape({
      client_id: PropTypes.string.isRequired,
      client_name: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  fetchRequests: PropTypes.func.isRequired, // Function to fetch updated requests
};

export default TableHeader;
