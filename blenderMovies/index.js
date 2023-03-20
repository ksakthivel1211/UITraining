const posters = [
    {
        "imageUrl": "https://ddz4ak4pa3d19.cloudfront.net/cache/56/62/5662bc2079ee7ffd491b65c29a360ac9.jpg",
        "title": "Sprite Fright"
    },
    {
        "imageUrl": "https://cdna.artstation.com/p/assets/covers/images/019/392/064/large/andy-goralczyk-agent-poster-street-small.jpg?1563288236",
        "title": "Agent 327"
    },
    {
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Spring2019AlphaPosterBlender.jpg/1200px-Spring2019AlphaPosterBlender.jpg",
        "title": "Spring"
    }
];

const video = {
    "videoUrl": "https://ia800200.us.archive.org/7/items/Sintel/sintel-2048-stereo.mp4",
    "title": "Sintel",
    "description": "“Sintel” is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film. This 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. ",
    "comments": [
        {
            "name": "Micheal Scott",
            "image": "images/micheal.png",
            "comment": "How often do people make a film where the main character kills the thing they were trying to rescue because they didn’t recognize it? Not that often. This brought tears to my eyes."
        },
        {
            "name": "Dwight K Schrute (Asst. to the Regional Manager)",
            "image": "images/dwight.png",
            "comment": "Breathtaking, I’ve only just begun my blender journey. Making something every day until I get to the point I can create something on this scale. Pretty amazing short story as well. Props all around to all involved in this great piece of work!"
        },
        {
            "name": "Jim Halpert",
            "image": "images/jim.png",
            "comment": "Only the best stories can make you cry, and while I’ve lost count how many times I’ve watched this remarkable piece of art  over the years showing it to people I know, Sintel brings a tear to my eye every time. This film is inspiring not only for the beautiful story but for the magical quality animation."
        },
        {
            "name": "Pam Beesly Halpert",
            "image": "images/pam.png",
            "comment": "This short film was riveting. The musical overlay was astounding and so were the animations. I was bawling like a little kid at the end of this video and not many videos are able to do this to me."
        },
        {
            "name": "Angela Martin",
            "image": "images/angela.png",
            "comment": "I saw this movie a long time ago as a child and it still scars me to this day. This is the kind of stuff that should AT THE VERY LEAST be played before a movie the way they showed bao before The Incredibles 2. These are little masterpieces."
        },
        {
            "name": "Kevin Malone",
            "image": "images/kevin.png",
            "comment": "Wow, at first I thought that it wasn’t that good, nice animation and all but not excellent story. Then I saw the end. The feels are real. You win Blender Foundation, you win."
        },
        {
            "name": "Andy Bernard",
            "image": "images/andy.png",
            "comment": "Honestly seeing a story with a sad ending is refreshing, I can tell you the ending of 99% of all movies ever made. “Its a happy ending”. Its why I like game of thrones and its why I loved this."
        }
    ]
};

let movieArea = document.querySelector(".movie-area");
let commentsArea = document.querySelector(".comments-area");


// Video Section
let videoVariable = document.createElement("video");
videoVariable.className = "video-element";
videoVariable.poster = "https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg";
videoVariable.controls = true;
videoVariable.muted = true;

let videoSrc = document.createElement("source");
videoSrc.src = video.videoUrl;

videoVariable.appendChild(videoSrc);

// Page Heading

let pageHeading = document.createElement("h3");
pageHeading.innerText = video.title;
pageHeading.className = "video-heading";

let pageDescription = document.createElement("p");
pageDescription.innerText = video.description;
pageDescription.className = "videoDetails";

// Appending Video, Page Heading, Page Description
movieArea.append(videoVariable, pageHeading, pageDescription);


for (const comment of video.comments) {
    let card = document.createElement("div");
    card.className = "comment-card";

    let cardImgWrapper = document.createElement("div");
    cardImgWrapper.className = "imageContainer";
    let cardImg = document.createElement("img");
    cardImg.className = "comment-img"

    cardImgWrapper.append(cardImg);

    let cardTextWrapper = document.createElement("div");
    let cardHead = document.createElement("h2");
    cardHead.className = "card-heading";

    let cardContent = document.createElement("p");
    cardContent.className = "card-description";

    // Inserting Values
    cardHead.innerText = comment.name;
    cardContent.innerText = comment.comment;
    cardImg.src = comment.image;

    cardTextWrapper.append(cardHead, cardContent);

    card.append(cardImgWrapper, cardTextWrapper)

    // Inserting Comment
    commentsArea.appendChild(card);
}

// Upcoming Projects

let upcomingProjects = document.querySelector(".upcoming-projects");

let projectsWrapper = document.createElement("div");
projectsWrapper.className = "projectContainer";

for (const project of posters) {
    let projectsImageWrapper = document.createElement("div");
    projectsImageWrapper.className = "projectImage";
    let upcomingProjectImage = document.createElement("img");
    upcomingProjectImage.src = project.imageUrl;
    upcomingProjectImage.title = project.title;
    projectsImageWrapper.appendChild(upcomingProjectImage);
    projectsWrapper.appendChild(projectsImageWrapper);
}

upcomingProjects.appendChild(projectsWrapper);

