//import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
//import { useAuth } from 'hooks';
import { Header } from './AppBar.styled';
import { AuthNav } from 'components/App/AuthNav/AuthNav';

export const AppBar = () => {
  //   const { isLoggedIn } = useAuth();
  const isLoggedIn = 0;
  return <Header>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Header>;
};
// import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';

// export const AppBar = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <header className={css.header}>
//       <Navigation />
//       {isLoggedIn ? <UserMenu /> : <AuthNav />}
//     </header>
//   );
// };
