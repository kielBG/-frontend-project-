//body css
const $body = $('body');

$body.css("background-image", "url(https://media1.giphy.com/media/d5PPYjcb3caPTHM3hv/giphy.gif)");
$body.css("background-position", "center center");
$body.css("background-repeat", "no-repeat");
$body.css("background-attachment", "fixed");
$body.css("background-size", "cover");
$body.css("justify-content", "center");
//main
const $main = $('#main');

//built fun button
const funButton = $('<button class = "fun">fun</button>');
funButton.on("click", function() {
    $resourcePage.hide();
    $funPage.show(2000);
})
$main.append(funButton);

//built help button
const helpButton = $('<button class = "help">Resources</button>');
helpButton.on("click", function() {
    $funPage.hide();
    $resourcePage.show(2000);
})
$main.append(helpButton);

//resource page css settings
const $resourcePage = $('<div class = "resource-page"></div>');
$resourcePage.css("width", "800px");
$resourcePage.css("text-align:", "center");
$resourcePage.css("border-radius", "20px");
$resourcePage.css("background-color", "white");
$resourcePage.css("opacity", "90%");
$resourcePage.css("padding", "20px");
$resourcePage.css("color", "black");
$resourcePage.css("font-size", "x-large")
$resourcePage.css("justify-content", "center");
$resourcePage.css("text-allign", "center");
$main.append($resourcePage);
$resourcePage.hide()

//fun page css settings
const $funPage = $('<div class = "fun-page"></div>');
$funPage.css("width", "800px");
$funPage.css("text-align:", "center");
$funPage.css("border-radius", "20px");
$funPage.css("background-color", "black");
$funPage.css("opacity", "90%");
$funPage.css("padding", "20px");
$funPage.css("color", "purple");
$funPage.css("font-size", "x-large")
$funPage.css("justify-content", "center");
$funPage.css("text-allign", "center");
$main.append($funPage);
$funPage.hide();


//laugh button built
const $laughButton = $('<button class = "laugh">I\'ve got a joke for you!</button>');
$funPage.append($laughButton);
$laughButton.on("click", addJoke);

//animal button built
const $animalButton = $('<button class = "animal-pic">A cute puppy!</button>')
$funPage.append($animalButton);
$animalButton.on("click", generateImg);


//get for random joke
  function addJoke() {  
    $.ajax({
        url: 'https://icanhazdadjoke.com/',
        type: 'GET',
        dataType: 'json',
        headers: {
            'Accept': 'application/json'
        },
        success: function (data) {
            let div = $(`<div class="joke">${data.joke}</div>`);
            div.css("padding", "15px");
            $funPage.append(div);  // Outputs a dad joke to the console
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
  }

  //get for random dog pic
function generateImg() {
  $.ajax({
    url: 'https://random.dog/woof.json',
    type: 'GET',
    dataType: 'json',
    headers: {
        'Accept': 'application/json'
    },
    success: function (data) {
        let div = $(`<img src= ${data.url}></img>`);
        div.css("display", "block");
        div.css("margin-left", "auto");
        div.css("margin-right", "auto");
        div.css("width", "50%");
        div.css("opacity", "100%");

        $funPage.append(div);  // Outputs a dad joke to the console
    },
    error: function(error) {
        console.error('Error:', error);
    }
})
}

//resources info build
    
resourceContainer = [
    {
        name: "Mental Health America",
        number: "Call or text 988",
        summary: "Mental Health America is the nation's leading national nonprofit dedicated to the promotion of mental health, well-being, and illness prevention. Our work is informed, designed, and led by the lived experience of those most affected.",
        link: "https://mhanational.org/"
    },
    {
        name: "National Council for Mental Wellbeing",
        number: "202.684.7457",
        summary: "The National Council for Mental Wellbeing is a membership organization that drives policy and social change on behalf of more than 3,300 mental health and substance use treatment organizations and the more than 10 million children, adults and families they serve. We advocate for policies to ensure equitable access to high-quality services. We build the capacity of mental health and substance use treatment organizations. And we promote greater understanding of mental wellbeing as a core component of comprehensive health and health care. Through our Mental Health First Aid (MHFA) program, we have trained more than 3 million people in the U.S. to identify, understand and respond to signs and symptoms of mental health and substance use challenges.",
        link: "https://www.thenationalcouncil.org/get-involved/members/"
    },
    {
        name: " National Empowerment Center Technical Assistance Center (NEC TAC)",
        number: "800-power2u (800-769-3728)",
        summary: "The National Empowerment Center Technical Assistance Center (NEC TAC) is a federally-funded consumer/survivor-run national technical assistance and resource center fostering recovery, self-determination, and community inclusion. We serve mental health consumer/survivors, peer-run service and advocacy organizations, family members, providers, and decision-makers.",
        link: "https://power2u.org/"
    },
    {
        name: "",
        number: "",
        summary: "",
        link: ""
    },
    {
        name: "",
        number: "",
        summary: "",
        link: ""
    },
    {
        name: "",
        number: "",
        summary: "",
        link: ""
    },
    {
        name: "",
        number: "",
        summary: "",
        link: ""
    },
    {
        name: "",
        number: "",
        summary: "",
        link: ""
    },
    {
        name: "",
        number: "",
        summary: "",
        link: ""
    },
    {
        name: "",
        number: "",
        summary: "",
        link: ""
    },
]

for (let i = 0; i <resourceContainer.length; i++) {
    let resourceObj = resourceContainer[i];
const resourceCard = document.createElement("span");
      resourceCard.className = "result-card";
      resourceCard.innerHTML = `
        <h3 class="resource-title">${resourceObj.name}</h3>
        <h2 class="resource-phoneNumber">${resourceObj.number}</h2>
        <div class="resource-about">
          <em>about:</em>
          <p>${resourceObj.summary}</p>
        </div>
        <a href=${resourceObj.link} target="_blank">Check them out here.</a>
      `;
      $resourcePage.append(resourceCard);
}