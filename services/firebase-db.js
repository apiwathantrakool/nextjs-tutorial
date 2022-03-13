const EVENTS_URL = `${process.env.firebase_base_url}/events.json`;
const FEEDBACKS_URL = `${process.env.firebase_base_url}/feedback.json`;
const USERS_URL = `${process.env.firebase_base_url}/users.json`;

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

export async function signup(requestBody) {
  const response = await fetch(USERS_URL, {
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

export async function getAllUsers() {
  const response = await fetch(USERS_URL);
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
