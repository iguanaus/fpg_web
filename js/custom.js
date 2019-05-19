
var globe_bottom = 0

jQuery(document).ready(function($){

    var div = $('.globe');
    var bottom = div.offset().top + div.height();

    globe_bottom = bottom

  $(window).scroll(function(){
    $(".globe").css({
        bottom: globe_bottom + $(this).scrollTop()*.5
    });
  });
  
});



/*
	In this case, submit the coin form. 
*/
function postNewsEmailToGoogle() {

	var name = $('#name').val()
	var email = $('#email').val()
	var message = $('#message').val()

    console.log("Sending: " + email)


    //data = {'entry.936585468':name,'entry.457860218':name,'entry.494277682':email,'entry.225467439':message,'entry.1694291617':message,'entry.1063865937':message,'submit':"Submit"}

    if ((email !== "") && (name !== "")) {
        newUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfuEAyaAv1wqBeKrglq4Bu7QFRTzcxcF4HayIlpvcpvCHc9-w/formResponse?usp=pp_url&entry.936585468='+name+'&entry.494277682='+email+'&entry.1694291617='+message+'&submit=Submit'
        console.log(newUrl)

        $.ajax({
            url:newUrl,
            statusCode: {
                0: function () {
                    //$('#email').val("");
                    console.log("Success");
                    //location.reload();
                    $('#myform').hide(400);
                    $('#finaltext').text('Thank you! We will be in touch shortly!');
                },
                200: function () {
                    //$('#email').val("");
                    console.log("Success");
                    //location.reload();
                    $('#myform').hide(400);
                    $('#finaltext').text('Thank you! We will be in touch shortly!');
                }
            }

        });

        /*
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSfuEAyaAv1wqBeKrglq4Bu7QFRTzcxcF4HayIlpvcpvCHc9-w/formResponse",
            data: data,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //$('#email').val("");
                    console.log("Success");
                    //location.reload();
                },
                200: function () {
                    //$('#email').val("");
                    console.log("Success");
                    //location.reload();
                }
            }
            
        });
*/
        console.log("Sent it!");
    }
    else {
        console.log("Invalid email")
      $('#submitp').text("I can only read valid names/emails!");
      $('#submitp').show("slow")
        //Error message
    }
}