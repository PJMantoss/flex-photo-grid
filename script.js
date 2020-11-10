async function getPhotos(){
    let res = await fetch("photos.json");
    let photos = await res.json();
    return photos;
}

function getMyPhotosHtml(photos){
    let myPhotosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}">`
    }).join(
        return `<img class="my-photos">`
    );
}