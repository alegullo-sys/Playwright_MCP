import { UserData } from './types';

export function getUserData(email: string): UserData {
  return {
    nome: 'Alexandre Teste',
    email,
    senha: 'Teste@123',
    day: '15',
    month: 'August',
    year: '1990',
    first: 'Alexandre',
    last: 'Gullo',
    company: 'Tech Solutions',
    address: 'Rua das Flores, 123',
    address2: 'Apto 45',
    country: 'United States',
    state: 'Minas Gerais',
    city: 'Uberlândia',
    zipcode: '38400-000',
    mobile: '+55 34 99999-8888',
  };
}
