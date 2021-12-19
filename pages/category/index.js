import { useRouter } from 'next/router';

export default function Category() {
  const router = useRouter();
  const goToSubCategoryItem = () => {
    router.push({
      pathname: '/category/[id]/[subCategoryId]',
      query: { id: 'category01', subCategoryId: 'sub01' },
    });
  };
  return (
    <>
      <h1>Category</h1>
      <button onClick={goToSubCategoryItem}>{'Sub Category item'}</button>
    </>
  );
}
