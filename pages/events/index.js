import useSWR from 'swr';
import { useEffect, useState } from 'react';
import EvenList from '../../components/events/event-list';
import { getAllEvents } from '../../utils/api-utils';

export default function AllEventsPage() {
  const [loadedEvents, setLoadedEvents] = useState();
  const { data, error } = useSWR('events', getAllEvents);
  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setLoadedEvents(events);
    }
  }, [data]);

  if (!loadedEvents) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <EvenList itemList={loadedEvents} />
      </div>
    );
  }
}
