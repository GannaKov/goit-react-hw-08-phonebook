// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
// import { GlobalStyle } from 'CreateGlobalStyle';
// import { fetchContacts } from 'redux/operations';
// import { ContainerWrap } from 'components/Section/Section';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactsList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Fiter/Filter';
// import { Title } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import RegisterPage from '../../pages/Register';
import LoginPage from '../../pages/Login';
import HomePage from '../../pages/Home';
import ContactsPage from '../../pages/Contacts';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
// AnnaK AnnaK@mail.com       AnnaK@mail.com
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />;
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

/* export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
    </Routes>
  );
};  */

/*  export const App = () => { */
/* //   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const items = useSelector(selectContacts);

//   useEffect(() => { */
/* //     dispatch(fetchContacts());
//   }, [dispatch]);
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         color: '#010101',
//       }}
//     >
//       <GlobalStyle />
//       <Title>Phonebook</Title>

//       <ContainerWrap>
//         <ContactForm />
//       </ContainerWrap>
//       <ContainerWrap title="Contacts">
//         <Filter />
//         {isLoading && !error && <b>Request in progress...</b>}
//         {items.length > 0 && <ContactsList />}
//       </ContainerWrap>
//     </div>
//   );
// }; */
////========================================================
