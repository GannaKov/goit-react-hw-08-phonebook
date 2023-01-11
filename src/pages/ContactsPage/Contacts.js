import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchContacts } from 'redux/contacts/operations';
import {
  selectIsLoading,
  selectContacts,
  selectError,
} from 'redux/contacts/selectors';
import { ContainerWrap } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Fiter/Filter';
import { Title } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>

      <ContainerWrap>
        <ContactForm />
      </ContainerWrap>
      <ContainerWrap title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {items.length > 0 && <ContactsList />}
      </ContainerWrap>
    </>
  );
}
//
//    <TaskEditor />
//       <div>{isLoading && 'Request in progress...'}</div>
//       <TaskList />
//
//-----------------------------------------
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

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const items = useSelector(selectContacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
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
// };
