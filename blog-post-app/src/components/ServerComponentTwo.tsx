import fs from 'fs';

export const ServerComponentTwo = () => {
  fs.readFileSync('README.md', 'utf8');
  return <h1>Server Component Two</h1>;
};