function sendMail() {

    postData = {};
    $('#contactUs').serializeArray().map(function (contactField) {
        postData[contactField.name] = contactField.value;
    });

    if (postData.message && /@/.test(postData.to)) {

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

        $('input, textarea').val('');
        $('.not-contacted').hide();
        $('.contacted').show();
        $('#send').html('Thanks!');

    } else {

        $('.contacted').hide();
        $('.not-contacted').show();
        $('#send').html('Error!');

    }
}
