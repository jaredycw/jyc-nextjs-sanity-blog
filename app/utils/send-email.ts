import { FormData } from "../component/form/contactform";

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to send email.');
      }
      return res.json();
    })
    .then((response) => {
      if (response && response.message) {
        alert(response.message);
      } else {
        throw new Error('Invalid response from server.');
      }
    })
    .catch((err) => {
      console.error(err);
      alert('An error occurred while sending the email.');
    });
}