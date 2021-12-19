import { useRouter } from 'next/router';

export default function BlogDate() {
  const router = useRouter();
  console.log(router);
  const { query } = router;
  return <div>{query?.date?.toString()}</div>;
}
