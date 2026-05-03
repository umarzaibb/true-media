export function POST(request) {
    return new Response(request.headers, {status: 200});
}