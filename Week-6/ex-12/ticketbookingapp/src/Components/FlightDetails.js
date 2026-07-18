function FlightDetails() {
  return (
    <div>
      <h2>Flight Details</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Flight No</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
            <td>10:00 AM</td>
          </tr>

          <tr>
            <td>AI202</td>
            <td>Chennai</td>
            <td>Mumbai</td>
            <td>2:30 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FlightDetails;