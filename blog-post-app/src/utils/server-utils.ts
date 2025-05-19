// src/utils/server-utils.ts
import 'server-only';

export const serverSideFunction = () => {
  console.log('[server] This is a secure server-side function');
  return 'Server Result';
};