export interface Campaign {
  id: string;
  name: string;
  platform: 'Google Ads' | 'Meta Ads' | 'TikTok Ads';
  status: 'Active' | 'Paused' | 'Draft';
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
  cpc: number;
  cpa: number;
  roas: number;
  startDate: Date;
  endDate?: Date;
}

export interface TrafficData {
  date: string;
  sessions: number;
  users: number;
  pageviews: number;
  bounceRate: number;
  avgSessionDuration: number;
  source: string;
}

export interface FunnelStep {
  id: string;
  name: string;
  users: number;
  conversionRate: number;
}

export interface Funnel {
  id: string;
  name: string;
  steps: FunnelStep[];
  totalUsers: number;
  overallConversionRate: number;
}

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
  source: string;
  customerId: string;
}

export interface MetricCard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon?: React.ReactNode;
}
