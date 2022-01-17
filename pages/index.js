import Head from 'next/head';
import { getFeaturedEvents } from '../utils/api-utils';
import EvenList from '../components/events/event-list';

export default function HomePage(props) {
  const { events } = props;
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name='description' content='Home page description' />
      </Head>
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
