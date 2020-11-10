async function getPhotos(){
    let res = await fetch("photos.json");
    let photos = await res.json();
    return photos;
}

function getMyPhotosHtml(photos){
    let myPhotosHtml = photos.map().join();
}