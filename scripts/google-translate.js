function translateText(){

    const textToBeTranslated = $('#textToBeTranslated').val();

    const settings = {
            async: true,
            crossDomain: true,
            url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/text',
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'd67a5eab10msh444b6ea21047b91p12c928jsn78f03f342a27',
                'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            processData: false,
            data: JSON.stringify({
                from: "auto",
                to: "sq",
                text: textToBeTranslated
            })
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            $('#textTranslated').text(response.trans);
        });
}


$('#translateBtn').on('click', translateText);