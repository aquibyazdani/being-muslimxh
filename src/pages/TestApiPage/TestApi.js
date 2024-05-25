import React, { useState } from "react";
import AlertMessage from "../../components/AlertMessage/AlertMessage";
import { getData, postData } from "../../utils/api";
import Layout from "../../components/layouts/Layout";

const TestApi = () => {
  const [alert, setAlert] = useState(null); // State to manage alerts
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      await getData(
        "/example-endpoint",
        (message) => setAlert({ type: "success", message }), // Success callback
        (error) => setAlert({ type: "danger", message: error }) // Error callback
      );
    } catch (error) {
      console.error("Failed to fetch data");
    }
  };

  const handleSubmit = async () => {
    try {
      const newData = { name: "Sample Data" }; // Example data for POST
      await postData(
        "/submit-endpoint",
        newData,
        (message) => setAlert({ type: "success", message }), // Success callback
        (error) => setAlert({ type: "danger", message: error }) // Error callback
      );
    } catch (error) {
      console.error("Failed to submit data");
    }
  };

  return (
    <Layout>
      {alert && <AlertMessage {...alert} onClose={() => setAlert(null)} />}{" "}
      {/* Display alert */}
      <h2>Data Fetching Example</h2>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={handleSubmit}>Submit Data</button>
    </Layout>
  );
};

export default TestApi;
