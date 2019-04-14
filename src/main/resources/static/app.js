var stompClient = null;


function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    $("#roomName").prop("disabled", connected);
    $("#nickName").prop("disabled", connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#messages").html("");
}

function connect() {
    var socket = new SockJS('/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/rooms/'+$("#roomName").val()+'/messages', function (resp) {
            showMessage(JSON.parse(resp.body).user,JSON.parse(resp.body).message);
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendMessage() {
    stompClient.send("/app/"+$("#roomName").val()+"/message", {}, JSON.stringify({'user': $("#nickName").val(),'message': $("#message").val()}));
}

function showMessage(user,message) {
  if(user == $("#nickName").val()){
    $("#messages").append('<tr><td><span class="myUser">'+user+':</span>'+ message + '</td></tr>');
  }else{
    $("#messages").append('<tr><td><span class="otherUser">'+user+':</span>'+ message + '</td></tr>');
  }
}

$(function () {
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendMessage(); });
    $("#conversation").hide();
    $( "#message" ).keypress(function(e) {
      if(e.which == 13) {
          sendMessage();
      }
    });
});
