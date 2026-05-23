export default function generateEmailTemplate(code) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        font-family: Arial, sans-serif;
      }
      .container {
        max-width: 500px;
        margin: 40px auto;
        background: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }
      .header {
        background: #ff7a00;
        color: white;
        padding: 20px;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
      }
      .content {
        padding: 30px;
        text-align: center;
        color: #333;
      }
      .code {
        font-size: 32px;
        font-weight: bold;
        color: #ff7a00;
        margin: 20px 0;
        letter-spacing: 5px;
      }
      .footer {
        font-size: 12px;
        color: #888;
        text-align: center;
        padding: 15px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      
      <div class="header">
        Your Verification Code
      </div>

      <div class="content">
        <p>Use the code below to continue:</p>
        
        <div class="code">${code}</div>
        
        <p>This code will expire in 5 minutes.</p>
      </div>

      <div class="footer">
        If you didn’t request this, please ignore this email.
      </div>

    </div>
  </body>
  </html>
  `;
}