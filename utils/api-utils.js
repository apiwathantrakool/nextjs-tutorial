export async function getAllEvents() {
  const response = await fetch(
    'https://training-e3776-default-rtdb.asia-southeast1.firebasedatabase.app/nextJS/events.json'
  );
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

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
}

export async function fetchFeedbacks() {
  const response = await fetch('http://localhost:3000/api/feedback', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.data;
}
