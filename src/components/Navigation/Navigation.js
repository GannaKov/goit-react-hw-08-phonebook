// import { useAuth } from 'hooks';
import { LinkNav } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  // const isLoggedIn = false;

  return (
    <nav>
      <LinkNav to="/">Home</LinkNav>
      {isLoggedIn && <LinkNav to="/contacts">Contacts</LinkNav>}
    </nav>
  );
};
