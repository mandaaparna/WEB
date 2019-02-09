function getGithubInfo(user) {

    var url_1="https://api.github.com/users/"+user;
    $('#usrname').html('');
    $('#usrid').html('');
    $('.avatar').html('');
    $('.information').html('');
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 ) {
            if (this.status == 200) {
                $('#usrname').text('Username:');
                $('#usrid').text('ID');
                //$('.avatar').html('<img src=' + myObject["avatar_url"] + ' alt="img">')
                //$('.information').html('<a href=' + myObject['url'] + '> Link to profile </a>');
                var myObject = JSON.parse(this.responseText);
                console.log(myObject)
                $('#usrname').append(myObject['login']);
                $('#usrid').append(myObject['id'])
                $('.avatar').html('<img src=' + myObject["avatar_url"] + ' alt="img">')
                $('.information').html('<a href=' + myObject['html_url'] + '> Link to profile </a>');
            }
            else
            {
$('#usrname').text('Invalid User');
            }
        }
    };

    xhttp.open("GET",url_1,false);
    xhttp.send();


}

function showUser(user) {
console.log(1)
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content

}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed

    console.log(2)

}


$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
