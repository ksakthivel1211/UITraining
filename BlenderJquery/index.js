const posters = "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346";
const videos ="https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0";

$.when(
    $.getJSON(posters),
    $.getJSON(videos)
).done(function(a,b){

    const video = b[0];
    const poster = a[0];

    let videoElement = $(`<video class=video-element src=${video.videoUrl} poster=https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg controls></video>`);
    $(".movie-area").append(videoElement);

    const videoTitle = $(`<h3 class=video-heading></h3>`);
    videoTitle.append(video.title);
    $(".movie-area").append(videoTitle);

    const videoDescription = $(`<p class=videoDetails></p>`);
    videoDescription.append(video.description);
    $(".movie-area").append(videoDescription);

    let fragmentComment = $(document.createDocumentFragment());
    for (const comment of video.comments) {

    const commentCard = $(`<div class=comment-card></div>`);
    const commentImageWrapper = $(`<div class=imageContainer></div>`);
    const commentImg = $(`<img class=comment-img src=${comment.image}></img>`)
    commentImageWrapper.append(commentImg);

    const commentText = $(`<div></div>`);

    const commentHeading = $(`<h2 class=card-heading></h2>`);
    commentHeading.append(comment.name);
    
    const commentDescription = $(`<p class=card-description></p>`);
    commentDescription.append(comment.comment);

    commentText.append(commentHeading);
    commentText.append(commentDescription);

    commentCard.append(commentImageWrapper);
    commentCard.append(commentText);

    fragmentComment.append(commentCard);
    }
    $(".comments-area").append(fragmentComment);

    const postersWrapper = $(`<div class=projectContainer></div>`);
    let fragmentPoster = $(document.createDocumentFragment());

    for (const project of poster){

        const posterImgWrapper = $(`<div class=projectImage></div>`);
        const posterImage = $(`<img src=${project.imageUrl}></img>`);
        posterImgWrapper.append(posterImage);
        fragmentPoster.append(posterImgWrapper);
    }
    postersWrapper.append(fragmentPoster);
    $(".upcoming-projects").append(postersWrapper);

})