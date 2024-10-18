import * as Avatar from '@radix-ui/react-avatar';
import { classNames } from '~/utils/classNames';

export const UserAvatar = ({ name, size = 'size-7.5' }: { name: string; size?: string }) => {
  return (
    <Avatar.Root className={classNames('rounded-full overflow-hidden', size ? size : 'size-7.5')}>
      <Avatar.Image src={`https://dayu.woa.com/avatars/${name}/profile.jpg`} />
      <Avatar.Fallback
        className="bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-400 w-full h-full flex items-center justify-center select-none text-sm"
        delayMs={600}
      >
        {name.slice(0, 2).toUpperCase()}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default UserAvatar;
