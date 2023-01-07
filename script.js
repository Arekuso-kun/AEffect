for (let i = 0; i < (screen.width/40)*(screen.height/40); i++) {
    const small_square = document.createElement('div');
    const container = document.querySelector('.container');
    small_square.classList.add('small-square');
    small_square.style.backgroundImage = `url('data/image (${Math.floor(Math.random() * 31) + 1}) (Custom).jpg')`; 
    console.log(Math.floor(Math.random() * 10) + 1);
    container.append(small_square);
}
