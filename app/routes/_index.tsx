import type { LoaderFunction } from '@remix-run/cloudflare';
import { json, type MetaFunction } from '@remix-run/cloudflare';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { Header } from '~/components/header/Header';
import { RayContainer } from '~/components/ui/RayContainer';
import { authenticateUser } from '~/utils/auth.server';

export const meta: MetaFunction = () => {
  return [{ title: 'MC Bolt' }, { name: 'description', content: '' }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticateUser(request);
  return json({ user });
};

export default function Index() {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <RayContainer />
      <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
    </div>
  );
}
