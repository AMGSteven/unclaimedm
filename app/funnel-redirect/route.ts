import { redirect } from "next/navigation"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  // Get query parameters
  const searchParams = request.nextUrl.searchParams
  const z = searchParams.get("z") || ""
  const uid = searchParams.get("uid") || ""
  const pathRankingId = searchParams.get("path_ranking_id") || ""

  // Preserve query parameters
  const queryString = new URLSearchParams({
    z,
    uid,
    path_ranking_id: pathRankingId,
    ...(searchParams.has("utm_source") && { utm_source: searchParams.get("utm_source")! }),
    ...(searchParams.has("utm_medium") && { utm_medium: searchParams.get("utm_medium")! }),
    ...(searchParams.has("utm_campaign") && { utm_campaign: searchParams.get("utm_campaign")! }),
  }).toString()

  // Redirect to funnel with preserved query parameters
  return redirect(`/funnel/quiz?${queryString}`)
}
