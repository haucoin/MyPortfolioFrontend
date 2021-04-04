/**
 * MyPortfolio
 * @Author Holland Aucoin
 * 
 * Mail Gun Service
 * @Summary This class is a service that makes HTTP calls to the backend service to retrieve information about experiences using axios
 */
class MailGunService {

    /**
     * Method to send an email
     * @param {String} emailInfo
     */
    async sendEmail(emailInfo) {

        var api_key = '[MY_KEY]';
        var domain = '[MY_DOMAIN]';
        var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

        let sender = "*** " + emailInfo.firstName + " " + emailInfo.lastName + " <" + emailInfo.email + ">";
         
        var data = {
          from: sender,
          to: '[EMAIL]',
          subject: emailInfo.subject,
          text: emailInfo.message
        };
         
        let status = mailgun.messages().send(data, function (error, body) {
          console.log(body);
        });

        return status;
    }

}

export default new MailGunService();
