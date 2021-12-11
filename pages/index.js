import Head from 'next/head';
import { useAuth } from '../lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Fast feedback</title>
      </Head>
      <main>
        <h1>Fast Feedback</h1>

        <p>Current user : {auth?.user ? auth.user.email : ''}</p>

        {auth?.user ? (
          <button onClick={(e) => auth.signout()}>Sign out</button>
        ) : (
          <button onClick={(e) => auth.signInWithGitHub()}>Sign in</button>
        )}
      </main>
    </div>
  );
};

export default Home;
