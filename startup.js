    function con() {
        document.getElementById("chatbotarea").style.display = "block";
        document.getElementById("ChatOutput").innerHTML += "<a class='no-design-a bot'><b>Webplix</b></>: ";
        currentIndex = 0;
        timer = setInterval(generateText, speedInterval);
    }