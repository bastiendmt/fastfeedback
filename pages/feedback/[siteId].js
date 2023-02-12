import DashboardShell from '@/components/DashboardShell';
import EmptyState from '@/components/EmptyState';
import FeedbackTable from '@/components/FeedbackTable';
import Page from '@/components/Page';
import SiteFeedbackTableHeader from '@/components/SiteFeedbackTableHeader';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const SiteFeedback = () => {
  const { user } = useAuth();
  const { query } = useRouter();
  const { data, error } = useSWR(
    user ? [`/api/feedback/${query.siteId}`, user.token] : null,
    fetcher
  );

  if (!data || data.error) {
    return (
      <DashboardShell>
        <SiteFeedbackTableHeader siteName={'test'} />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <SiteFeedbackTableHeader siteName={data.site.name} />
      {data.feedback.length ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
};

const SiteFeedbackPage = () => (
  <Page name="Name of the site" path={`/feedback/site`}>
    <SiteFeedback />
  </Page>
);

export default SiteFeedbackPage;
