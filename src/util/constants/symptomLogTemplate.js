export const getSymptomLogHtml = (name, logs) => `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    <style>
      body {
        font-family: Helvetica Neue, Arial, sans-serif;
        padding: 20px;
        text-align: left;
        max-width: 100%;
        box-sizing: border-box;
        overflow-x: hidden;
      }
      .log-entry {
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 20px;
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
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 5px;
      }
      h2 {
        font-size: 15px;
        font-weight: normal;
        text-align: center;
        margin-bottom: 20px;
      }
      p {
        margin-bottom: 10px;
        max-width: 100%;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
    </style>
  </head>
  <body>
    <h1>Symptom Tracker</h1>
    <h2>Name: ${name}</h2>
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
        : ''}
    </div>
  </body>
</html>
`;
