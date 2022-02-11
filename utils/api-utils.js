import { getAllEvents } from '../services/firebase-db';

const BASE_URL = 'http://localhost:3000';

// Events
export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
}

// Feedbacks
export async function getFeedbacksAPI() {
  const response = await fetch(`${BASE_URL}/api/feedback`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.data;
}

export async function addNewFeedbackAPI(name, message) {
  const response = fetch(`${BASE_URL}/api/feedback`, {
    method: 'POST',
    body: JSON.stringify({ name, message }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
  return response;
}
