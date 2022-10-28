import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/app');
  });

  return;
};

export default Index;
