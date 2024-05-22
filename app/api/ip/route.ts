export async function GET(request: Request) {
  const ipHeaders = [
    'x-forwarded-for',
    'remote-addr',
    'x-real-ip',
  ];

  let ip = ipHeaders.map(header => request.headers.get(header))
                    .find(ip => ip !== null) || 'IP not found';

  // Check if the IP is an IPv4-mapped IPv6 address
  if (ip.startsWith('::ffff:')) {
    ip = ip.substring(7); // Extract the IPv4 part
  }

  // Handle the loopback address for local development
  if (ip === '::1') {
    ip = '127.0.0.1'; // Convert to IPv4 loopback address
  }

  return new Response(JSON.stringify({ ip }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
