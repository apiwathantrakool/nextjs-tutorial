import { useRouter } from 'next/router';

export default function SubcategoryItem() {
  const router = useRouter();
  console.log('!!!!!router: ', router);

  return <div>SubcategoryItem</div>;
}
