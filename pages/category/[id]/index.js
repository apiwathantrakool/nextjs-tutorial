import Image from 'next/image';

export default function Subcategory() {
  return (
    <div>
      <div>Subcategory</div>
      <Image
        src={'https://drive.google.com/uc?id=1WXD-LZtiuwrs25Bok9sgdPeMucAnH_8D'}
        alt={'test image'}
        width={1200}
        height={1200}
        objectFit={'cover'}
        layout={'responsive'}
      />
    </div>
  );
}
