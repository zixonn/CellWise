export const getSymptomLogHtml = (logs) => `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <style>
      body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        padding: 20px;
        text-align: left;
        max-width: 100%;
        box-sizing: border-box;
        overflow-x: hidden;
        background-color: #f4f4f9;
      }
      .log-entry {
        border: 1px solid #ccc;
        padding: 15px;
        margin-bottom: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        page-break-inside: avoid;
        break-inside: avoid;
        word-wrap: break-word;
        overflow-wrap: break-word;
        max-width: 100%;
      }
      @media print {
        .log-entry {
          break-inside: avoid;
        }
      }
      h1 {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
        color: #333;
      }
      h2 {
        font-size: 18px;
        font-weight: normal;
        text-align: center;
        margin-bottom: 30px;
        color: #555;
      }
      p {
        margin-bottom: 8px;
        max-width: 100%;
        word-wrap: break-word;
        overflow-wrap: break-word;
        line-height: 1.5;
        color: #444;
      }
      strong {
        color: #007BFF; /* Bootstrap primary color */
      }
    </style>
  </head>
  <body>
    <h1>Symptom Tracker</h1>
    <h2>My Logged Symptoms</h2>
    <div>
      ${logs.length > 0
        ? logs
            .map(
              (obj) => `
          <div class="log-entry">
            <p><strong>Description:</strong> ${obj.description}</p>
            <p><strong>Time:</strong> ${obj.time}</p>
            <p><strong>Date:</strong> ${obj.date}</p>
          </div>
        `
            )
            .join('')
        : '<p>No symptom logs available.</p>'}
    </div>
  </body>
</html>
`;
