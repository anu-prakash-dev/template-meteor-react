import MailConfig from './mail';

Meteor.startup(function () {
  
  // MAIL_URL config for Email service
  process.env.MAIL_URL = 'smtp://postmaster@sandboxedff1adce6d54492ad12c36bdfc1e0df.mailgun.org:1e35fc000ad879b602e2f79b93a897ca@smtp.mailgun.org:587';

  //console.log(MailConfig.de);
});
