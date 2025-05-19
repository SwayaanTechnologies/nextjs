import 'client-only';

export const clientSideFunction = () => {
  console.log('use window object');
  console.log('use local storage');
  return 'client result';
};