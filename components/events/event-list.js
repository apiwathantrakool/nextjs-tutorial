import EventItem from './event-item';
import _ from 'lodash';

export default function EventList(props) {
  const { itemList } = props;
  return (
    <ul>
      {_.map(itemList, (event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </ul>
  );
}
