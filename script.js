let anime_girls = true;

for (let i = 0; i < (screen.width/40 +2)*(screen.height/40 +2); i++) { // (screen.width/40)*(screen.height/40)
    const small_square = document.createElement('div');
    const container = document.querySelector('.container');
    small_square.classList.add('small-square');
    if(anime_girls == true)
        small_square.style.backgroundImage = `url('data/anime girls/image (${Math.floor(Math.random() * 79) + 1}).png')`; 
    else
        small_square.style.backgroundImage = `url('data/MAL/image_name_${Math.floor(Math.random() * 249) + 1}.jpg')`; 
    console.log(small_square);
    console.log(Math.floor(Math.random() * 10) + 1);
    container.append(small_square);
}
