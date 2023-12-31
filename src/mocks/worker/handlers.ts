import { http, HttpResponse } from 'msw';

const LoginHandlers = [
  http.get('/api/login', ({ request }) => {
    const url = new URL(request.url);

    const userName = url.searchParams.get('userName');
    const password = url.searchParams.get('password');

    if (!userName || !password) {
      return new HttpResponse(null, { status: 404 });
    }

    return new HttpResponse(
      JSON.stringify({
        userName,
        password,
      }),
    );
  }),
];

export const handlers = [
  ...LoginHandlers,
];
