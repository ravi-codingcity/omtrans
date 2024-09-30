import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script"; // Import Google API script

function GoogleAnalyticsTracking() {
  const CLIENT_ID =
    "389691617720-1o96pt27ohlna82sehhhtcjvhb6v85qq.apps.googleusercontent.com";
  const PROPERTY_ID = "457885223"; // GA Property ID

  const [activeUsers, setActiveUsers] = useState(null);
  const [pageViews, setPageViews] = useState(null);
  const [sessions, setSessions] = useState(null);

  // Function to initialize Google API
  const handleClientLoad = () => {
    gapi.load("client:auth2", initClient);
  };

  const initClient = () => {
    gapi.client
      .init({
        clientId: CLIENT_ID,
        scope: "https://www.googleapis.com/auth/analytics.readonly",
        discoveryDocs: [
          "https://analyticsreporting.googleapis.com/$discovery/rest?version=v4",
        ],
      })
      .then(() => {
        gapi.auth2.getAuthInstance().signIn().then(loadAnalyticsData);
      });
  };

  const loadAnalyticsData = () => {
    gapi.client.analyticsdata
      .runReport({
        property: `properties/${PROPERTY_ID}`,
        dateRanges: [
          {
            startDate: "14daysAgo",
            endDate: "today",
          },
        ],
        metrics: [
          { name: "activeUsers" },
          { name: "screenPageViews" },
          { name: "sessions" },
        ],
      })
      .then(
        (response) => {
          displayData(response.result);
        },
        (error) => {
          console.error("Error fetching data", error);
        }
      );
  };

  const displayData = (data) => {
    const activeUsers = data.rows[0]?.metricValues[0]?.value;
    const pageViews = data.rows[1]?.metricValues[0]?.value;
    const sessions = data.rows[2]?.metricValues[0]?.value;

    setActiveUsers(activeUsers);
    setPageViews(pageViews);
    setSessions(sessions);
  };

  useEffect(() => {
    handleClientLoad(); // Trigger Google API load on component mount
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to OmTrans</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
        <p className="text-xl">
          <span className="font-semibold">Real-Time Visitors:</span>{" "}
          {activeUsers !== null ? activeUsers : "Loading..."} users currently on
          the site.
        </p>
        <p className="text-xl">
          <span className="font-semibold">Page Views (Last 7 Days):</span>{" "}
          {pageViews !== null ? pageViews : "Loading..."}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Sessions (Last 7 Days):</span>{" "}
          {sessions !== null ? sessions : "Loading..."}
        </p>
      </div>
    </div>
  );
}

export default GoogleAnalyticsTracking;
