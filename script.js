let Pics_Type;
let temp_type;

window.wallpaperPropertyListener = {
    applyUserProperties: function (properties) {

        if (properties.picstype) {
            Pics_Type = properties.picstype.value;
        }
    },
};


function loadPics(type) {
    while(document.querySelector('.small-square')) { document.querySelector('.small-square').remove(); }
    for (let i = 0; i < (screen.width / 40 + 2) * (screen.height / 40 + 2); i++) {
        const small_square = document.createElement('div');
        const container = document.querySelector('.container');
        small_square.classList.add('small-square');
        if (type == 2)
            small_square.style.backgroundImage = `url('data/anime girls/image (${Math.floor(Math.random() * 79) + 1}).png')`;
        else
            small_square.style.backgroundImage = `url('data/MAL/image_name_${Math.floor(Math.random() * 249) + 1}.jpg')`;
        container.append(small_square);
    }
}

loadPics(Pics_Type);
temp_type = Pics_Type;

setInterval(function () {
    if(temp_type != Pics_Type) {
        loadPics(Pics_Type);
    }
    temp_type = Pics_Type;
}, 1000);