import { useDispatch } from 'react-redux';
import { Wrapper, UserData } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserData>Welcome, {user.name}</UserData>
      <UserData>{user.email}</UserData>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
