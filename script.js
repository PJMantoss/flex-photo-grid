async function getPhotos(){
    let res = await fetch("photos.json");
    let photos = await res.json();
    return photos;
}

function getMyPhotosHtml(photos){
    let myPhotosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`
    }).join('');
    return `<div class="my-photos">${myPhotosHtml}</div>`
}

getPhotos().then(photos => {
    let myPhotosHtml = getMyPhotosHtml(photos);
    document.html.innerHMTL =`<div class="my-gallery">
        <img id="my-selected-photo" class="my-photo" 
             src="https://picsum.photos/id/${photos[2].id}/300/300"
        />
        ${myPhotosHtml}
    </div>`;

    let myPhotosImgs = Array.from(document.getElementsByClassName("my-photo"));
    myPhotosImgs.forEach(photoImg => {
        photoImg.addEventListener("click", e => {
            let selectedPhotoSrc = photoImg.src.substr(0, photoImg.src.length - 7) + `300/300`;
            let selectedPhoto = document.getElementById("my-selected-photo");
            selectedPhotoSrc.style.display = "inline";
        })
    })
})