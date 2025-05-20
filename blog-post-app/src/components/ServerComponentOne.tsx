import fs from 'fs';
import { ServerComponentTwo } from './ServerComponentTwo';
// import ClientComponentOne from './ClientComponentOne';

export const ServerComponentOne = () => {
  fs.readFileSync('README.md', 'utf8');
  return (
    <div>

      <h1>Server Component One</h1>
      {/* Valid: Server inside Server */}
      <ServerComponentTwo />

      {/* Client inside Server */}
      {/* <ClientComponentOne /> */}
    </div>
  );
};