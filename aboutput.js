var speedInterval = 2.5;
    var currentIndex = 0;
    var timer;
    var finishedOutput = true;
    var textSpecificTopic; // if it is empty, there is no specific topic by default
    var textSpecificTopicCount = 0; // if this reaches certain point, it means that the topic is closed

    var unknownResponse;
    var UserChat;
    var Input;
    var answer = [];
    answer[0] = "Good day, what is your name and how can i help you?";
    var random_array = answer[0];
    var unspacedmatchedInput = [];
    for (let o = 0; o < matchedInput.length; o++) {
        unspacedmatchedInput[o] = matchedInput[o].replace(/ /g, ".*");
    }
    var hasNumber;

    function randomArray() {
        random_array = answer[Math.floor(Math.random() * answer.length)];
    }


    function generateText() {
     if (currentIndex < random_array.length) {
      finishedOutput = false;
      var currentChar = random_array[currentIndex];
	  document.getElementById("ChatOutput").innerHTML += currentChar;
	  plainTagsReplacement();
      currentIndex++;
      scrollToBottom();
        } else {
            go = false;
            finishedOutput = true;
            clearInterval(timer);
            temp = answer[0]; // assign temporary value
            answer = []; // clear the value of the array so that the previous answer wont be read
            answer[0] = temp;
            random_array = answer[0];
            scrollToBottom();
    }
	
	function plainTagsReplacement() {
	  // After generating the dynamic content, convert plain text tags into real HTML tags
      var chatOutputDiv = document.getElementById("ChatOutput");
      var content = chatOutputDiv.innerHTML;
	  content = content.replace(/\[br\]/g, "<br>");
      content = content.replace(/\[b\](.*?)\[\/b\]/g, "<b>$1</b>");
      content = content.replace(/\[i\](.*?)\[\/i\]/g, "<i>$1</i>");
	  content = content.replace(/\[u\](.*?)\[\/u\]/g, "<u>$1</u>");
	  content = content.replace(/\[ul\](.*?)\[\/ul\]/g, "<ul>$1</ul>");
	  content = content.replace(/\[li\](.*?)\[\/li\]/g, "<li>$1</li>");
	  content = content.replace(/\[a\s+href='([^']+)'\](.*?)\[\/a\]/g, '<a href="$1">$2</a>');
      chatOutputDiv.innerHTML = content;
      }
	}

    function OutPut() {
        getAnswer();
        randomArray();
        document.getElementById("ChatOutput").innerHTML += "<br><a class='no-design-a bot'><b>Webplix</b></>: ";
        currentIndex = 0;
        timer = setInterval(generateText, speedInterval);
    }