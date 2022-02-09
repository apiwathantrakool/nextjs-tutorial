const EVENTS_URL =
  'https://training-e3776-default-rtdb.asia-southeast1.firebasedatabase.app/nextJS/events.json';
const FEEDBACKS_URL =
  'https://training-e3776-default-rtdb.asia-southeast1.firebasedatabase.app/nextJS/feedback.json';

export async function getAllEvents() {
  const response = await fetch(EVENTS_URL);
  const data = await response.json();
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getAllFeedbacks() {
  const response = await fetch(FEEDBACKS_URL);
  const data = await response.json();
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function addNewFeedbacks(requestBody) {
  const response = await fetch(FEEDBACKS_URL, {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
  return response;
}
