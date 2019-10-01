import App from './App';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('formValid');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);

  } catch (err) {
    return undefined;
  }
};

export const saveState = (formValid) => {
  try {
    const serializedState = JSON.stringify(formValid);
    localStorage.setItem('formValid', serializedState);
  } catch (err) {
    // die
  }
};