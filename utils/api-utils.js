import { getAllEvents } from '../services/firebase-db';

const BASE_URL = process.env.base_url;

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

export async function signupAPI(email, password) {
  const response = fetch(`${BASE_URL}/api/auth/signup`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
  return response;
}
