import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    // redirect...
    router.replace('/developing');
  });

  return null;
};

export default Index;
