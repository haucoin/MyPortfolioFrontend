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

        var api_key = '0deded9b9d811f7358a8f55b9723bf30-0d2e38f7-de303e2e';
        var domain = 'mail.hollandaucoin.com';
        var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

        let sender = "*** " + emailInfo.firstName + " " + emailInfo.lastName + " <" + emailInfo.email + ">";
         
        var data = {
          from: sender,
          to: 'holland.aucoin2@gmail.com',
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