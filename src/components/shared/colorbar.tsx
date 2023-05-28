import { cn } from '../../lib/utils';

export const ColorBar = () => {
  return (
    <div
      id={`color-bar`}
      className={cn(`
        color-bar
        fixed
        left-0
        right-0
        top-0
        h-[0.3px]
        w-full
        bg-color-bar
      `)}
    />
  );
};

/**
 *
 * #536976,#292E49
 * #003973,#E5E5BE
 *
 */
