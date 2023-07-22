// Distribution and modification of this code is not allowed and will be punish according to law in violation of intellectual property
var facebookPage = "https://www.facebook.com/websiteplix/";
var gMailTo = "mailto:webplix.ph@gmail.com";
var mail = "webplix.ph@gmail.com";
var kTwitter = "https://twitter.com/KhianVictory";
var kInstagram = "https://www.instagram.com/khiandelapena/";
var kYouTube = "https://www.youtube.com/KhianVictoryDCalderon?sub_confirmation=1";
var kTikTok = "https://www.tiktok.com/@khian.vc";

function inquire() {
        window.location.href = facebookPage;
    }

var matchedInput = [
    "who own you|who creat you|who made you",
    "who founder|who create webplix|who own webplix|weplix founder|webplix creat|webplix ceo|ceo webplix|founder webplix",
    "khian victory|khian calderon",
    "mail",
    "fb page|facebook page|official page",
    "technical support",
    "domain free|free domain",

    "web kind|kind web|which web|web which",
    "kind question|question kind",
    "comany hour|hour company|business hour|hour business|when avail|when can i",
    "where lucena|lucena locat|locat lucena",
    "business detail|detail business|how you work|how webplix work",
    "what you offer",
    "custom design|templates",
    "pay how|how pay|pay method|debit card|credit card|paypal|gcash",
    "avail international|world wide",

    "who he|who she|who they|who them",
    "who khian",
    "offers webplix|webplix offers",
    "why choose you|why should i you|what set webplix apart|why choose webplix|why shoud i webplix|what differe webplix|what differe you|webplix offer|offer webplix",
    "fee to pay|fees|dif fee|what to pay",
    "web timeline|timeline web|how long web|web how long",
    
    "how are you|you ok",
    "can you help",
    "copyright notice",
    "web mobile friendly|web phone friendly|web responsive|responsive web|friendly mobile|friendly phone",
    "client update web own|client update own web|client web update own|client web own update|client own update web|client own web update|update client web own|update client own web|update web client own|update web own client|update own client web|update own web client|web client update own|web client own update|web update client own|web update own client|web own client update|web own update client|own client update web|own client web update|own update client web|own update web client|own web client update|own web update client",
    "web security|security web",
    "what are you|who are you",

    "web ample|ample web",
    "how much|cost",
    "what process|how develop|how website|how work",
    "how inquire|inquire how",
    "how contact inquiries|how contac support",
    "service offer|feature offer|feature service",
    "faq|what ask|what question|which ask",
    "location|where you locate",
    "about us|contac us",
    "privacy policy",

    "can you|what is|who are|where is|when is",
    "additional service|more service|other service",
    "next step|web project|after web then",
    "do you know|who s",
    "maintenance|maintaining",
    "complain",
    "name|i'm|i am",
    "feedback|recommend|suggestion|improvement",

    "webplix",
    "wow|amazing|amaze|speechless|fantastic",
    "good night",
    "hello|hi|good morning|good afternoon|good evening",
    "help",
    "ok|thank|yes|yep|yeah",
    "no|don t|did n t|does n t",
    "really|why|where|who|what|when|how",
];

/*
[a href='" + X + "'][/a]
[a href='" + facebookPage + "'][/a]
[a href='" + gMailTo + "'][/a]
[a href='" + gMailTo + "']" + mail + "[/a]
*/

var equivalentResponse = [
    ["As a chatbot, i am currently owned by Webplix and also created by Webplix"],
    ["Webplix is currently owned and created by Khian Victory D. Calderon"],
    ["Khian Victory D. Calderon owns Webplix, Khian was born on Philippines in September 2004[br][br]His social media accounts:[ul] [li][a href='" + kTwitter + "']Twitter[/a]: Khian's twitter account[/li] [li][a href='" + kInstagram + "']Instagram[/a]: Khian's Instagram[/li] [li][a href='" + kYouTube + "']YouTube[/a]: Khian's YouTube Channel[/li] [li][a href='" + kTikTok + "']TikTok[/a]: Khian's TikTok Account[/li] [/ul]"],
    ["Send us a message at [a href='" + gMailTo + "']" + mail + "[/a]"],
    ["Like us on [a href='" + facebookPage + "']facebook[/a]"],
    ["Webplix offers technical support to client's websites, contact us for more info"],
    ["There is no such thing as free domain, a domain needs to be registered because it consumes power, different domains have different costs"],

    ["Webplix makes various kinds of websites. We make website that aligns with our client's interest whether is for business, commercial, personal, entertainment, etc... website"],
    ["I answer different business questions, enter FAQ for more details"],
    ["Our business/company is available 24/7 depending on the availability of our developer/s since we are working from different or remote location and we do not have a physical office location"],
    ["Lucena City is located in Quezon Province Philippines"],
    ["Our company works by clients inquiring to our developer to make website and publishing it, then the clients tell us how they want their website to look like and we will do our best to make the website as close as possbile to our client's vision"],
    ["Webplix offers to make websites and chatbot"],
    ["We offer both custom web design and templates. Webplix aims to create websites based on client's interest. We want to make sure that our clients are in full control on how their website would look like and function as intended"],
    ["Webplix accepts [b]Debit Card[/b], [b]PayPal[/b], [b]GCash[/b] only. We may accept cash on hand if our developer's location is reachable by a client and vice versa"],
    ["[b]Yes![/b], Webplix is available for international clients worldwide. Webplix operate in online platform anywhere in the world as long as there is an internet"],

    ["I'm sorry but can you be more specific to who is he/she/them/they? Please use the exact names and be more specific to questions thank you"],
    ["I'm sorry but i do not know such name, can you complete the name maybe i will be able to recognize who is that"],
    ["Webplix offers making websites and chatbots"],
    ["At Webplix, our commitment to excellence and innovation sets us apart from other web development services. We take pride in offering a developer-centric approach, tailored to meet the specific needs of our valued clients. With a profound understanding of developers' requirements, we strive to deliver solutions that align seamlessly with their vision and technical expertise. Our professional team of developers communicates directly with our clients, fostering a collaborative and transparent environment throughout the development process. By actively involving developers in discussions, we ensure that their insights are valued and integrated into the final product, resulting in a more refined and sophisticated outcome. At Webplix, we recognize the importance of empowering developers to create outstanding web solutions. Through efficient communication channels and a deep appreciation for their skill set, we aim to enhance the development journey, enabling developers to unleash their full potential and achieve remarkable results. With a focus on building lasting partnerships and providing top-notch support, Webplix is the partner of choice for developers seeking a seamless and rewarding web development experience"],
    ["There are different fees to pay in making websites:[br][ul][li][b]Initial Fee[/b]: Main cost of developing a website and is a one time payment[/li][li][b]Publishing Fee[/b]: Main cost for publishing the developed website, the cost depends on where the website is hosted[/li][li][b]Maintenance Fee[/b]: cost for maintaining the website, repairing error, glitches, and bugs and is to be paid monthly[/li][li][b]Update / Change Fee[/b]: Cost for changing the appearance, functionalities, etc... and is only to be paid every client's request to change or update their website[/li][li][b]Renew Fee[/b]: Cost for renewing domain of the website. This is to be paid yearly only and if the client chose to publish their website via custom domain. (Free subdomain is not included)[/li][li][b]Misc Fee[/b]: The cost for other services but it is on client's request or developer's request and it is rare[/li][/ul][br][b][u]Failure to pay any of the fee will result on taken down of the website[/u][/b]"],
    ["It depends on the client request, if the client does not require a deadline, it typically takes a 2 - 3 weeks or even a month for website to be developed. If a client requires a deadline, it may take less than 2 weeks or even days but it is more expensive than those that does not require deadline. This is called rush project development"],
    
    ["I'm fine thank you, how can i help you?","That's very generous of you, what can i do for you?"],
    ["Of course, i will try my best to help you","Yes, i will try the best of my knowledge to assist you"],
    ["Webplix, including all its content and source code, is protected by copyright law. Webplix 2023. All rights reserved. As the rightful owner, We do not authorize anyone or everyone to reuse, recycle, modify, distribute, or steal any part of the code or content present on the Webplix website. Any unauthorized use, reproduction, or distribution of the website's HTML, CSS, JavaScript code, design elements, images, or written content is strictly prohibited[br][br]We want to emphasize that users are not permitted to download, copy, or save any part of this website using any means, including but not limited to employing 'Ctrl + S' or any other download methods. Engaging in such activities would be a violation of the copyright laws protecting this website's intellectual property[br][br]Any infringement or unauthorized use of this copyrighted material may lead to legal action in accordance with the applicable copyright laws. By accessing and using the Webplix website, users agree to respect and comply with this copyright notice and refrain from engaging in any activities that breach the terms stated herein[br][br]For inquiries regarding the use or licensing of the website's content, please contact [a href='" + gMailTo + "']" + mail + "[/a]. Please note that this copyright notice is subject to change without prior notice and was last updated on July 2023. Thank you for respecting our rights as the owners of Webplix's content and source code"],
    ["Yes!, our website is built and developed to be mobile friendly"],
    ["Possible but unlikely, it is possible for clients to update their own website if they have access where the website is uploaded or published, furthermore, the permission of the developer is required when clients wants to update their website on their own, but its recommended to notify the developer to update the website for the client to avoid inconvenience, errors, and other problems that might occur withouth the developer's knowledge"],
    ["At Webplix, we prioritize the security of our clients' websites through a meticulous human-driven approach. Our dedicated team conducts thorough manual security checks, including code reviews, audits, and penetration testing, to identify and address potential vulnerabilities. We actively collaborate with our clients, involving them in the process and providing security awareness training to recognize risks. Staying up-to-date with the latest security trends, we continuously improve our practices and promptly apply necessary updates. In case of any security incident, our team responds swiftly and effectively to mitigate damage and restore integrity. With our personalized attention and adherence to industry best practices, clients can trust that their websites are in safe hands, offering a robust and secure online presence"],
    ["I am webplix's chatbot ready to answer business questions about webplix"],

    ["Sure, this very website you are visiting was created by webplix itself"],
    ["It depends, but we used Philippine Peso as a currency since we are based in Phlippines. There are various factors that affects how much a website would cost such as how long it took to make the website, functionalities and design of the website, additional client request, rush project development, etc... Overall, the cost may vary depending on many factors"],
    ["Just tell us how you like your website to look like and what functionalities will it offer to user and we got the rest. We recommend our clients to have their communication always open so we can ask them for consultation about their websites"],
    ["To inquire, click the inquire now button in the upper part of this page and you will be redirected to our facebook page"],
    ["Click inquire now, and you will be redirected to our facebook page, you can send a message about your conern in our facebook page"],
    ["Weblpix offers to make customize websites based on our client's interest"],
    ["FAQ or frequently asked questions includes:[ul][li]What services does Webplix offer?[/li][li]How do I contact Webplix for inquiries or support?[/li][li]What is the process for getting a website developed by Webplix?[/li][li]How much does it cost to build a website with Webplix? [/li][li]Can you show examples of websites you have designed?[/li][li]What is the estimated timeline for website development?[/li][li] What are the different fees to pay?[/li][li]Is the website design responsive and mobile-friendly?[/li][li]Can clients update the website's content on their own?[/li][li]How do you ensure the security of clients' websites?[/li][li]What sets Webplix apart from other web development services?[/li][li]Is Webplix available for international clients?[/li][li]What payment methods does Webplix accept?[/li][li]Do you offer custom website design, or do you use templates?[/li][li] What are the next steps after contacting Webplix for a website project?[/li][/ul][br]These are just the examples of questions i can answer, but i can still answer questions not listed in the FAQ, feel free to ask"],
    ["Webplix is a company located on Phlippines Lucena City","Webplix is a company based on Philippines. Webplix aimed to have wide variety of place and prioritize portability. Due to this, we don't have offices, but rather our developer focus on working at remote locations. At Webplix, we embrace a modern and agile approach to business, prioritizing portability and flexibility. As a fully remote team, we believe in breaking physical boundaries to better serve our clients worldwide. Our location is wherever our talented team members are, ensuring seamless collaboration and a diverse range of perspectives. Regardless of distance, our commitment to delivering exceptional web solutions remains unwavering. By embracing portability, we can adapt to dynamic needs, provide efficient services, and foster a global community of success-driven partners. At Webplix, distance is not a limitation; it's an opportunity to thrive together in the digital landscape"],
    ["Sure, here it is:[br][br][b]About Us:[/b][br]Webplix is a company based in Philippines. Webplix is created and currently owned by Khian Victory D. Calderon. The founder started this company even before he was a college student. Webplix started at july 2023 with relatively few resources and one developer. Our founder has many expertise such as game developing, website developing, stock market, traditional business, online selling, etc... He explored many different things through out in his life[br][br][b]Mission:[/b][br]Our mission at Webplix is to empower businesses, both small and large, with the tools and support they need to establish and elevate their online presence. We strive to create stunning and functional websites that truly represent our clients' visions and values. Through collaboration, innovation, and exceptional customer service, we aim to be the trusted partner that brings their digital aspirations to life.[br][br][b]Vision:[/b][br]Our vision at Webplix is to be the ultimate platform that brings our clients' website visions to life exactly as they intend. We are committed to providing unparalleled customization and support, ensuring that every website we create reflects our clients' unique desires and aspirations. By placing our clients at the center of everything we do, we envision a future where businesses of all sizes thrive online with websites that exceed their expectations, empowering them to succeed in the digital world[br][br][b]Technical Support:[/b][br]Our technical team are available via our facebook page. The developer of wepblix aims to provide the fullest of the technical support as possible. To go to our facebook page, kindly click inquire now button in the home page. At Webplix, we are committed to delivering top-notch technical support to our valued clients. Our dedicated support team is here to assist you at every step of your website journey, ensuring that you receive prompt and reliable assistance whenever you need it. Whether you have questions about our services, encounter technical issues, or seek guidance on website customization, we are ready to provide the utmost support, striving to exceed your expectations and empower you to achieve your digital goals effortlessly. Your success is our priority, and we are here to make your experience with Webplix smooth, enjoyable, and truly exceptional[br][br][b]Contact Us:[/b][br]Should you have any questions or concerns regarding our Privacy Policy, please do not hesitate to contact us at [a href='" + gMailTo + "']" + mail + "[/a] or via our [a href='" + facebookPage + "']facebook page[/a]"],
    ["At Webplix, we prioritize your privacy and security. We want to assure you that we do not collect any personal data or sensitive information from our users while using our website. We do not use cookies or tracking mechanisms that can identify you individually. Rest assured that any information you browse or interact with on our website remains completely anonymous and confidential. Your privacy is of utmost importance to us, and we do not share or use any data for marketing purposes or third-party activities. Additionally, we advise users not to enter any sensitive information on our website to further safeguard their privacy. If you have any questions or concerns about our privacy practices, please don't hesitate to contact us"],

    ["I'm sorry but i do not know what you are talking about","I'm sorry but i do not have an answer for that question"],
    ["Webplix offers other services such as: fix errors and glitches as soon as possible we detect it in our client's website, change or update websites upon the client's request, request to fix website, and direct communication with developer"],
    ["After contacting us on our facebook page, we will notify our clients as soon as possible about their websites. After all, communication is the key"],
    ["I'm sorry but i do not know such person or anything associated with what you said"],
    ["Our service includes maintenance of websites of our clients, as a result, there is a separate fee that needs to be paid monthly for the chatbots to function properly. Failure to pay may result in taken down of the custom made chatbot. However, there is another fee such as update fee, etc... You may ask to our facebook page for more details or ask me again of what are the different fees to pay"],
    ["I'm sorry for your experience, feel free to message our facebook page about your complain and we will use it to improve our service"],
    ["Hello, how can i help you?","Hello, what can i do for you?","What a beautiful name, what can i do for you?","Okay, how can i help you?","Wonderful name, what is your question?"],
    ["If you have feedback, suggestion, or recommendation for improvement, feel free to message our facebook page"],

    ["Webplix is a company based on Philippines that makes websites and chatbot"],
    ["Thank you, if you have concern or question, don't hestitate to ask"],
    ["Have a nice day!, if you have question feel free to ask"],
    ["Hello there, how can i help you?","Hi there, what can i do for you?"],
    ["I only answer business inquiries or business questions but i will still try my best to assist you"],
    ["Glad to help, should you have concern about our business, feel free to ask","I'm glad i can help, do you still have question? you can still ask if you want","That's great, do not hestitate to ask if you still have question","I hope you like using our service, have a nice day! feel free to ask if you still have concern"],
    ["It's fine, how can i help you? If you still have question, let me know :)"],
    ["I'm sorry, but i am not able to understand follow up questions or the question you previously asked, however you may ask a direct question with complete sentence in it or another question so i can provide more accurate answer"],
];