import { create } from 'zustand';
import { Campaign, TrafficData, Funnel, Transaction } from '@/types';

interface AnalyticsStore {
  campaigns: Campaign[];
  trafficData: TrafficData[];
  funnels: Funnel[];
  transactions: Transaction[];
  selectedDateRange: {
    from: Date;
    to: Date;
  };
  selectedPlatforms: string[];
  isLoading: boolean;
  setCampaigns: (campaigns: Campaign[]) => void;
  setTrafficData: (data: TrafficData[]) => void;
  setFunnels: (funnels: Funnel[]) => void;
  setTransactions: (transactions: Transaction[]) => void;
  setDateRange: (range: { from: Date; to: Date }) => void;
  setSelectedPlatforms: (platforms: string[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useAnalyticsStore = create<AnalyticsStore>((set) => ({
  campaigns: [],
  trafficData: [],
  funnels: [],
  transactions: [],
  selectedDateRange: {
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    to: new Date(),
  },
  selectedPlatforms: [],
  isLoading: false,
  setCampaigns: (campaigns) => set({ campaigns }),
  setTrafficData: (trafficData) => set({ trafficData }),
  setFunnels: (funnels) => set({ funnels }),
  setTransactions: (transactions) => set({ transactions }),
  setDateRange: (selectedDateRange) => set({ selectedDateRange }),
  setSelectedPlatforms: (selectedPlatforms) => set({ selectedPlatforms }),
  setLoading: (isLoading) => set({ isLoading }),
}));
