// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { Wrapper, UserData } from './UserMenu.styled';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  //   const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserData>Welcome, {user.name}</UserData>
      <UserData>mango@mail.com</UserData>
      <button type="button">Logout</button>
    </Wrapper>
  );
};
// return (
//   <div className={css.wrapper}>
//     <p className={css.username}>Welcome, {user.name}</p>
//     <button type="button" onClick={() => dispatch(logOut())}>
//       Logout
//     </button>
//   </div>
// );
