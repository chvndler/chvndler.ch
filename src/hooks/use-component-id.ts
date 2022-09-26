import { useRef } from 'react';

import casualUid from '@/lib/utils/uid';

const useComponentId = () => {
  const { current: componentId } = useRef(casualUid());

  return componentId;
};

export default useComponentId;
