import {
  HELLO_WORLD
} from './types';

export const helloWorld = () => {
  return {
    types: HELLO_WORLD,
    payload: 'Hello World',
  };
}