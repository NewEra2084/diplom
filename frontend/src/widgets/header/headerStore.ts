import { create } from 'zustand';
import { StateType } from './types';

export const useHeaderStore = create<StateType>(set => ({
    headerText: 'Welcome to the Header',
    counter: 0,
    setHeaderText: (text: string) => set(prev => ({ headerText: prev.headerText+(prev.counter+1), counter: prev.counter+1 })),
}))