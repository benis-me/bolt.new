import { useStore } from '@nanostores/react';
import { useLoaderData } from '@remix-run/react';
import { ClientOnly } from 'remix-utils/client-only';
import UserAvatar from '~/components/ui/UserAvatar';
import { ChatDescription } from '~/lib/persistence/ChatDescription.client';
import { chatStore } from '~/lib/stores/chat';
import { classNames } from '~/utils/classNames';
import { HeaderActionButtons } from './HeaderActionButtons.client';

export function Header() {
  const chat = useStore(chatStore);
  const { user } = useLoaderData<{ user: { name: string } }>();

  return (
    <header
      className={classNames('flex items-center bg-bolt-elements-background-depth-1 p-5 h-[var(--header-height)]')}
    >
      <div className="flex items-center gap-2 z-logo text-bolt-elements-textPrimary cursor-pointer">
        <a href="/" className="text-xl font-semibold text-accent flex items-center font-mono">
          <div className="i-bolt:mc-logo?mask w-[38px] text-xl" />
        </a>
      </div>
      <span className="flex-1 px-4 truncate text-center text-bolt-elements-textPrimary select-none">
        <ClientOnly>{() => <ChatDescription />}</ClientOnly>
      </span>

      {chat.started && (
        <ClientOnly>
          {() => (
            <div className="mr-3">
              <HeaderActionButtons />
            </div>
          )}
        </ClientOnly>
      )}

      <UserAvatar name={user.name} />
    </header>
  );
}
