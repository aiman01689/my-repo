function make_album(artist: string, title: string, tracks?: number):
{artist: string; title: string; tracks?: number}
{
    const album = {
        artist,
        title,
        tracks
    };
    if (tracks !== undefined){
         album.tracks = tracks;
    }

    return album; 
}

const album1 = make_album('Artist 1', 'Album 1');
const album2 = make_album('Artist 2', 'Album 2', 12);
const album3 = make_album('Artist3', 'Album3',8);

console.log(album1);
console.log(album2);
console.log(album3);