// Health check endpoint used by the Docker HEALTHCHECK and load balancer.
export function GET() {
  return Response.json({ status: 'ok' })
}
