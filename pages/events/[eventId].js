export default function EventDetailPage(props) {
  const { params } = props;
  console.log('!!!!params: ', params);
  return (
    <div>
      <h1>EventDetailPage {params.eventId}</h1>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: {
      params,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          eventId: '01',
        },
      },
      {
        params: {
          eventId: '02',
        },
      },
    ],
    fallback: 'blocking',
  };
}
