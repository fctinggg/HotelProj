// our-domain.com/Login
import { Fragment } from "react";
import Image from 'next/image';
import bg_img from '../../img/francesca-saraco-_dS27XGgRyQ-unsplash.jpg';
import classes from '../../component/AuthForm/AuthFormBg.module.css';
import AuthForm from '../../component/AuthForm/AuthForm';
import { getSession } from 'next-auth/client';

const LoginPage = () => {
  return <Fragment>
    <div className={classes.container}>
    <div className={classes.FormContainer}>
      <AuthForm></AuthForm>
    </div>
    <div className={classes.imgContainer}>
    <div className={classes.imgDeco}>
        <Image
        src={bg_img}
        alt="BackgroundImage"
        width="1250px"
        height="750px"
        layout="intrinsic"
        />
    </div>
    </div>
    </div>
  </Fragment>
};

// 呢度導致每次入Signin都Send Http Req
// export async function getServerSideProps(context) {
//   const session = await getSession({req: context.req})

//   if(session) {
//     return {
//       redirect: {
//         destination: '/Profile',
//         permanent: false
//       }
//     }
//   }
//   return {
//     props: {session}
//   }
// }

export default LoginPage;