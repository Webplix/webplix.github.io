    document.addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            send_and_write();
        }
    });

    function getAnswer() {
        unknownResponse = true;
        var FilteredInput = Input.toLowerCase().replace(/[?!<>"'&$#@/]/gi, "");
        // output
        for (var i = 0; i < matchedInput.length; i++) {
            // special calculator variables
            hasNumber = /\d/.test(Input); // test for input if it has number
            modifiedInput = Input.replace(/[?a-zA-Z:., ]+/g, ""); // for calculator purpose
            if (hasNumber && modifiedInput.match(/-?\d+\.?\d*\s*[-+*/%]\s*-?\d+\.?\d*/)) { // check if the input has number, if it has number, it will perform a calculation
                answer[0] = "I'm sorry but i am not designed to solve math problems"
                unknownResponse = false;
                break;
            }
            // searching for output using input with space included
            else if (Input.toLowerCase().match((matchedInput[i]))) { // if response match the arrays
                let equivalentResponseSubArrayLength = equivalentResponse[i];
                let randomResponse = Math.floor(Math.random() * equivalentResponseSubArrayLength.length);
                answer[0] = equivalentResponse[i][randomResponse];
                //console.log("Matched Number: " + i + " >> " + matchedInput[i]);
                //console.log("Sub Number: " + randomResponse + " >> " + equivalentResponse[i][randomResponse]);
                unknownResponse = false;
                break;
            }

            // searching for output using input with unspace
            else if (Input.toLowerCase().match((unspacedmatchedInput[i]))) { // if response match the arrays
                let equivalentResponseSubArrayLength = equivalentResponse[i];
                let randomResponse = Math.floor(Math.random() * equivalentResponseSubArrayLength.length);
                answer[0] = equivalentResponse[i][randomResponse];
                console.log("Matched Number: " + i + " >> " + matchedInput[i]);
                console.log("Sub Number: " + randomResponse + " >> " + equivalentResponse[i][randomResponse]);
                unknownResponse = false;
                break;
            }
        }


        // unknown response
        if (unknownResponse == true) {
            answer[0] = "I'm sorry, but i am unable to understand your question, if this issue still persist, contact us in our facebook page or you can ask another";
            answer[1] = "I'm sorry, but i am unable to answer your question, if this issue still persist, contact us in our facebook page or you may ask another if there is any";
            answer[2] = "I'm sorry, but i am unable to comprehend what you are saying, if this issue still persist, contact us in our facebook page or you may ask another question";
            answer[3] = "I'm sorry, but i cannot understand your question, if this issue still persist, contact us in our facebook page or you may ask another question";
        }
    }

    function send_and_write() {
        Input = document.getElementById("chatbox").value;
        if (!Input.trim() == "" && finishedOutput) {
            UserChat = "<br><br><a class='no-design-a user'><b>You</b>:</a> " + Input;
            document.getElementById("ChatOutput").innerHTML += UserChat;
            OutPut();
            document.getElementById("chatbox").value = "";
        }
    }

    function fixed_send_and_write(x) {
        Input = x;
        if (!Input.trim() == "" && finishedOutput) {
            UserChat = "<br><br><a class='no-design-a user'><b>You</b>:</a> " + Input;
            document.getElementById("ChatOutput").innerHTML += UserChat;
            OutPut();
            document.getElementById("chatbox").value = "";
        }
    }
