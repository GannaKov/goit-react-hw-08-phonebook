import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Title } from './Contacts.styled';
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
      <Title>Phonebook</Title>
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


