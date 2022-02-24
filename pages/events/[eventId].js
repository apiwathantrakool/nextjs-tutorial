import Head from 'next/head';
import { getEventById } from '../../utils/api-utils';
import { getAllEvents } from '../../services/firebase-db';
import EventItem from '../../components/events/event-item';

export default function EventDetailPage(props) {
  const { event, eventId } = props;
  return (
    <div>
      <Head>
        <title>Event page {eventId}</title>
        <meta name='description' content={`Event page ${eventId}`} />
      </Head>
      <h1>EventDetailPage {eventId}</h1>
      <EventItem key={eventId} item={event} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const eventId = params.eventId;
  const event = await getEventById(params.eventId);
  return {
    props: {
      event,
      eventId,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((obj) => {
    return {
      params: {
        eventId: obj.id,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
