import { Alert } from 'react-native';

const defaultErrorMessage = 'Something went wrong';

export function handleApiErrors(error?: string | { message: string }) {
  let errorMsg = defaultErrorMessage;
  if (typeof error === 'string') {
    errorMsg = error;
  } else if (error?.message) {
    errorMsg = error.message;
  }
  Alert.alert('Error', errorMsg);
}
