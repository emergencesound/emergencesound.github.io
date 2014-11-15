function sendMail() {

    postData = {};
    $('#contactUs').serializeArray().map(function (contactField) {
        postData[contactField.name] = contactField.value;
    });

    $.post('https://api.sendgrid.com/api/mail.send.json', {
        api_user: 'emergencesound',
        api_key: 'led zeppelin 4',
        to: 'james.yates3@gmail.com',
        toname: postData.toname,
        subject: postData.subject,
        text: postData.message,
        from: postData.to
    }, function (success) {
        return success.message;
    });

}
