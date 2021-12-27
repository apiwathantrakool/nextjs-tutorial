import { getFeaturedEvents } from '../data/dummy-data';
import EvenList from '../components/events/event-list';

export default function HomePage(props) {
  const { products } = props;
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Home page</h1>
      <div>Data from hardcode</div>
      <EvenList itemList={featuredEvents} />
      <div>Data from getStaticProps</div>
      <EvenList itemList={products} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: [
        {
          id: 'e1',
          title: 'Test getStaticProps',
        },
      ],
    },
  };
}
