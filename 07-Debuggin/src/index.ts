import { getBaseEmail } from './services/email';

getBaseEmail('Brayan').then(email => {
  console.log(email.from);
  console.log(email.subject);
  console.log(email.text);
});
