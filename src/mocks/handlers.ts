import { http, HttpResponse } from 'msw';

const LoginHandlers = [
  http.get('/api/login', ({ request }) => {
    const url = new URL(request.url);

    const partyName = url.searchParams.get('partyName');
    const password = url.searchParams.get('password');

    if (!partyName || !password) {
      return new HttpResponse(null, { status: 404 });
    }

    return new HttpResponse(
      JSON.stringify({
        partyName,
        password,
      }),
    );
  }),
];

export const handlers = [
  ...LoginHandlers,
];
