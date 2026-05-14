import PublicProfileClient from './PublicProfileClient';

export async function generateStaticParams() {
  return [{ username: 'cricketoracle_99' }];
}

export default function PublicProfilePage() {
  return <PublicProfileClient />;
}
