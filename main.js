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

//header
const $header = $('#header');
const $headerAbout = document.createElement("span");
    $headerAbout.className = "about-card";
    $headerAbout.innerHTML = `
        <h2 class="quote">"Love's in need of love today." - Stevie Wonder</h2>
        <div class="site-about">
            <em>Welcome!</em>
            <p>Sometimes life can be a bit much. Overstimulating, emotionally exhausting, and overall just rough. You're not alone in having those feelings! Two ways to assist are: Talking to a non biased professional with the primary goal of helping you; Or finding something to smile and laugh about to remind you that things are okay and that the struggle isn't permanent. If you think getting in touch with a professional is in your best interest, select the resources button. If a smile is what you'd like, click the smile button and hangout for as long as you'd like!</p>
        </div>
    `;
$header.append($headerAbout);


//built help button
let loadResourcesRan = false; 
const helpButton = $('<button class = "help">Resources</button>');
helpButton.on("click", function() {
    $funPage.hide();
    if (loadResourcesRan === false) {
    loadResources();
    loadResourcesRan = true;
    };
    $resourcePage.show(2000);
})
$main.append(helpButton);

//built fun button
const funButton = $('<button class = "smile"><span class="material-symbols-outlined">sentiment_satisfied </span> </button>');
funButton.on("click", function() {
    $resourcePage.hide();
    $funPage.show(2000);
})
$main.append(funButton);

//resource page css settings
const $resourcePage = $('<div class = "resource-page"></div>');
$resourcePage.css("width", "800px");
$resourcePage.css("height", "800px");
$resourcePage.css("overflow", "scroll");
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
$funPage.css("height", "800px");
$funPage.css("overflow", "scroll");
$funPage.css("text-align:", "center");
$funPage.css("border-radius", "20px");
$funPage.css("background-color", "black");
$funPage.css("opacity", "90%");
$funPage.css("padding", "20px");
$funPage.css("color", "teal");
$funPage.css("font-size", "x-large")
$funPage.css("justify-content", "center");
$funPage.css("text-allign", "center");

$main.append($funPage);
$funPage.hide();


//laugh button built
const $laughButton = $('<button class = "laugh">I\'ve got a joke for you!</button>');
$funPage.prepend($laughButton);
$laughButton.on("click", addJoke);

//animal button built
const $animalButton = $('<button class = "animal-pic">A cute puppy!</button>')
$funPage.prepend($animalButton);
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
        let incoming = data.url.split("");
        if (incoming[incoming.length - 1] === 'g' || "f") {
        let img = $(`<img class = "dog" src= ${data.url}></img>`);
        img.css("display", "block");
        img.css("margin-left", "auto");
        img.css("margin-right", "auto");
        img.css("width", "50%");

        $funPage.append(img);  // Outputs a dog pic

        } else {
            let video = $(`
            <video class = "dog" controls> 
                <source src=${data.url} type="video/mp4"> 
            </video>`);
            video.css("display", "block");
            video.css("margin-left", "auto");
            video.css("margin-right", "auto");
            video.css("width", "50%");

            $funPage.append(video); //outputs a dog video
        }
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
        name: "National Institute of Mental Health (NIMH)",
        number: "1-866-615-6464 ",
        summary: "The National Institute of Mental Health (NIMH) is the lead federal agency for research on mental disorders. NIMH is one of the 27 Institutes and Centers that make up the National Institutes of Health (NIH), the largest biomedical research agency in the world. NIH is part of the U.S. Department of Health and Human Services (HHS).",
        link: "https://www.nimh.nih.gov/health/statistics/mental-illness"
    },
    {
        name: "World Health Organization",
        number: "+1 202 974 3000",
        summary: "Dedicated to the well-being of all people and guided by science, the World Health Organization leads and champions global efforts to give everyone, everywhere an equal chance to live a healthy life. ",
        link: "https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates"
    },
    {
        name: "National Alliance on Mental Illness",
        number: "800-950-6264",
        summary: "NAMI is the National Alliance on Mental Illness, the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.",
        link: "https://www.nami.org/Home"
    },
    {
        name: "American Association of Suicidology",
        number: "888-9 PREVENT",
        summary: "The American Association of Suicidology (AAS) is the world’s largest and nation’s oldest membership-based suicide prevention organization. Founded in 1968 by Edwin S. Shneidman, PhD, AAS promotes the research of suicide and its prevention, public awareness programs, public education and training for professionals and volunteers.",
        link: "https://suicidology.org/"
    },
    {
        name: "American Foundation for Suicide Prevention",
        number: "1-888-333-AFSP (2377)",
        summary: "Established in 1987, the American Foundation for Suicide Prevention (AFSP) is a voluntary health organization that gives those affected by suicide a nationwide community empowered by research, education and advocacy to take action against this leading cause of death.",
        link: "https://afsp.org/?search=about%20"
    },
    {
        name: "Anxiety & Depression Association of America",
        number: "1-800-273-TALK (8255)",
        summary: "ADAA works to prevent, treat, and cure anxiety disorders and depression. ADAA improves the quality of life for those who suffer through evidence-based educational resources, professional practice, and scientific research.",
        link: "https://adaa.org/"
    },
    {
        name: "Pride Counseling",
        number: "1-888-843-4564",
        summary: "Whether you are struggling with mental health issues, your identity, or just need someone to talk to, we believe help should be accessible to everyone. Individuals in the LGBTQ community suffer from mental health issues at a disproportionately high rate, and we wanted to help. By providing online therapy to the LGBTQ community, we make help accessible and accepting of everyone. We provide a platform for people to get the help they need affordably and conveniently. Message your therapist whenever an issue arises. Schedule sessions that work with your schedule.",
        link: "https://www.pridecounseling.com/"
    },
]

function loadResources(){
    for (let i = 0; i < resourceContainer.length; i++) {
    let resourceObj = resourceContainer[i];
    const resourceCard = document.createElement("span");
      resourceCard.className = "resource-card";
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
}