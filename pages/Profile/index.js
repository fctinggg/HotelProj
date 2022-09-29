// /profile
import { getSession } from 'next-auth/client';
import UserProfile from '../../component/UserProfile/UserProfile';

const ProfilePage = () => {
  return <UserProfile></UserProfile>
}

export async function getServerSideProps(context) {
  const session = await getSession({req: context.req})

  if(!session) {
    return {
      redirect: {
        destination: '/SignIn',
        permanent: false
      }
    }
  }
  return {
    props: {session}
  }
}

export default ProfilePage;