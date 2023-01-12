import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'CreateGlobalStyle';
import { Layout } from 'components/Layout';
import RegisterPage from '../../pages/Register';
import LoginPage from '../../pages/Login';
import HomePage from '../../pages/Home';
import ContactsPage from '../../pages/ContactsPage/Contacts';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
// AnnaK AnnaK@mail.com       AnnaK@mail.com
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
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
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
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
      <GlobalStyle />
    </>
  );
};
