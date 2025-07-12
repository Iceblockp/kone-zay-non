import { useQuery } from "@tanstack/react-query";

type Statistics = {
  baseProductCount: number;
  variantCount: number;
  priceReportCount: number;
};

async function fetchStatistics(): Promise<Statistics> {
  const response = await fetch("/api/statistics");
  if (!response.ok) throw new Error("Failed to fetch statistics");
  return response.json();
}

export function useStatistics() {
  return useQuery<Statistics>({
    queryKey: ["statistics"],
    queryFn: fetchStatistics,
    // Cache the statistics for 5 minutes
    staleTime: 5 * 60 * 1000,
  });
}
