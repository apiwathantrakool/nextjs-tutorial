import { getFeaturedEvents } from '../dummy-data';
import EvenList from '../components/events/event-list';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Home page</h1>
      <EvenList itemList={featuredEvents} />
    </div>
  );
}
