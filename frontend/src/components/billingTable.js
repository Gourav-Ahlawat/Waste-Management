import React from "react";
import PropTypes from "prop-types";

const BillingTable = ({ billings, onGenerateBill }) => {
  if (!billings || billings.length === 0) {
    return (
      <div className="text-center p-10">
        <p>No billing records found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mt-20 ml-[110px] max-h-[911.199951171875px] mq1024:gap-[16.80px] mq1024:pt-[85px] mq1024:pb-[114.8px] mq1024:w-full mq1280:pt-[61px] mq1280:pb-[82.2px]">
      <table className="w-full text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Client Name</th>
            <th className="px-4 py-2">Client Address</th>
            <th className="px-4 py-2">Client ID</th>
            <th className="px-4 py-2">Total Weight</th>
            <th className="px-4 py-2">Total Unpaid Weight</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {billings.map((billing, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-4 py-2">{billing.client_name}</td>
              <td className="px-4 py-2">{billing.client_address}</td>
              <td className="px-4 py-2">{billing.client_id}</td>
              <td className="px-4 py-2">{billing.total_weight}</td>
              <td className="px-4 py-2">{billing.total_unpaid_weight}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => onGenerateBill(billing.client_id)}
                >
                  Generate Bill
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

BillingTable.propTypes = {
  billings: PropTypes.array.isRequired,
  onGenerateBill: PropTypes.func.isRequired,
};

export default BillingTable;
