import { createAnthropicVertex } from 'anthropic-vertex-ai-provider';
import { GoogleAuth } from 'google-auth-library';

export function getAnthropicModel(_: string) {
  const anthropic = createAnthropicVertex({
    googleAuth: new GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    }),
  });

  return anthropic('claude-3-5-sonnet@20240620');
}
