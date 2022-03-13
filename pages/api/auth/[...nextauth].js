import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getAllUsers } from '../../../services/firebase-db';
import { verifyPassword } from '../../../utils/auth-utils';
import _ from 'lodash';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const users = await getAllUsers();
        const user = _.find(users, (obj) =>
          _.isEqual(obj.email, credentials.email)
        );

        if (!user) {
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error('Could not log you in!');
        }

        return { email: user.email };
      },
    }),
  ],
});
