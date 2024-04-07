import {createContext} from 'react';

export type LoginFormContextValue = {
    hasError: boolean,
};

export const LoginFormContext = createContext<LoginFormContextValue>({
    hasError: false,
});
