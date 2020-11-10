async function getPhotos(){
    let myPhotos = await fetch("photos.json");
    let photos = await myPhotos.json();
    return photos;
}