import { json, type LoaderFunctionArgs } from '@remix-run/cloudflare';
import { authenticateUser } from '~/utils/auth.server';
import { default as IndexRoute } from './_index';

export async function loader(args: LoaderFunctionArgs) {
  const user = await authenticateUser(args.request);
  return json({ id: args.params.id, user });
}

export default IndexRoute;
