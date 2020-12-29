let quotes = [

    'The way I see it, if you want to see a rainbow, <br>you gotta put with the rain',
    'Act as if what you do makes<br>a difference. It does',
    'Just becasue you\'re trash doesn\'t mean you can\'t do anything.<br>Remember, it\'s garbage can, not garbage can\'t',
    'Never regret anything that made you smile',
    'Aspire to inspire before we expire',
    'Everything you can imagine is real',
    'Whatever you do, do it well',
    'What we think, we become',
    'Tough times never last but tough people do',
    'One day the people that don’t even believe in you<br> will tell everyone how they met you',
    'If you tell the truth,<br> you don’t have to remember anything',
    'I could agree with you but then we’d both be wrong',
    'I don’t need it to be easy, <br>I need it to be worth it',
    'Doubt kills more dreams than failure ever will',
    'Never let your emotions overpower your intelligence',
    'Just because you\'re unique,<br>doesn\'t mean you\'re useful'

]



function generateQuote(){

    let quotePicker = Math.floor(Math.random()*Math.floor(quotes.length));

    document.getElementById("quote").innerHTML = quotes[quotePicker];

    switch (quotePicker){

        case 0:

            document.getElementById("name").innerHTML = '-Dolly Parton';
            break;

        case 1:

            document.getElementById("name").innerHTML = '-William James';
            break;

        case 2:

            document.getElementById("name").innerHTML = '-ZumTheZazaKing';
            break;

        case 3:

            document.getElementById("name").innerHTML = '-Mark Twain';
            break;

        case 4:

            document.getElementById("name").innerHTML = '-Unknown';
            break;

        case 5:

            document.getElementById("name").innerHTML = '-Pablo Picasso';
            break;

        case 6:

            document.getElementById("name").innerHTML = '-Walt Disney';
            break;

        case 7:

            document.getElementById("name").innerHTML = '-Buddha';
            break;

        case 8:

            document.getElementById("name").innerHTML = '-Robert H. Schiuller';
            break;

        case 9:

            document.getElementById("name").innerHTML = '-Robert H. Schiuller';
            break;

        case 10:

            document.getElementById("name").innerHTML = '-Mark Twain';
            break;

        case 11:

            document.getElementById("name").innerHTML = '-Harvey Specter';
            break;

        case 12:

            document.getElementById("name").innerHTML = '-Lil Wayne';
            break;

        case 13:

            document.getElementById("name").innerHTML = '-Suzy Kassem';
            break;

        case 14:

            document.getElementById("name").innerHTML = '-Drake';
            break;

        case 15:

            document.getElementById("name").innerHTML = '-Unknown';
            break;

    }

}