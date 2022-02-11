import Image from 'next/image';

export default function EventItem(props) {
  const { item } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div>{item?.title}</div>
      <div>{item?.description}</div>
      <div>{item?.location}</div>
      <div>{item?.date}</div>
      <Image
        src={'/' + item?.image}
        alt='event-item-image'
        width={250}
        height={100}
        layout={'fixed'}
        objectFit={'cover'}
        priority={true}
        placeholder={'blur'}
        blurDataURL={
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xg8AAnMBeJQW2OIAAAAASUVORK5CYII='
        }
      />
    </div>
  );
}
