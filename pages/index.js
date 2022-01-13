import { getFeaturedEvents } from '../utils/api-utils';
import EvenList from '../components/events/event-list';

export default function HomePage(props) {
  const { events } = props;
  return (
    <div>
      <EvenList itemList={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
}
