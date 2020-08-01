import { createContext } from 'react';

export const TransactionContext = createContext({
    title: '',
    price: '',
    id: '',
    description: '',
    location: '',
})