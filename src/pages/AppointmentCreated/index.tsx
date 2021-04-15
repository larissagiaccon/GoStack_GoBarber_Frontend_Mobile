import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

interface RouteParams {
  date: number;
  providerName: string;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as RouteParams;
  console.log('2');
  console.log(routeParams.providerName);
  const handleOkPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard',
        },
      ],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(
      routeParams.date,
      "EEEE', dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h'",
      {
        locale: ptBR,
      },
    );
  }, [routeParams.date]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Agendamento concluído</Title>
      <Description>{formattedDate}</Description>
      <Description>com {routeParams.providerName}</Description>

      <OkButton onPress={handleOkPressed}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
