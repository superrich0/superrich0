var telegram_bot_id = "6348616872:AAH_Q7WQ7MU4FpJXwW1wxIpsMyugmx0Z5MM";
//chat id
var chat_id = 1857385726;
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    
    message = "Name: " + u_name + "\nEmail: " + email  ;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};