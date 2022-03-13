import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { getUsersAPI } from '../../../utils/api-utils';
import { verifyPassword } from '../../../utils/auth-utils';
import _ from 'lodash';

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const users = await getUsersAPI();
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
