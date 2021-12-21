import EventItem from './event-item';

export default function EventList(props) {
  const { itemList } = props;
  return (
    <ul>
      {itemList.map((event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </ul>
  );
}
