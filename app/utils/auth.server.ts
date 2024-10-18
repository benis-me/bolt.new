export async function authenticateUser(request: Request) {
  if (process.env.NODE_ENV === 'development') {
    return { name: 'pennli' };
  }

  const staffname = request.headers.get('staffname');

  if (!staffname) {
    throw new Response('Unauthorized', { status: 401 });
  }

  return { name: staffname };
}
