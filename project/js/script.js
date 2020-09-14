

'use strict';

const movieDB = {
    movies: [
        "Автострада 60",
        "Гладиатор",
        "Облачный атлас",
        "Волк с Уолл-стрит",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
const advButton = document.querySelector('.removeAdv');

advButton.addEventListener('click', function() {
    advButton.querySelector('button').textContent = "Показать Рекламу";
    adv.forEach((item) => {
        if (item.style.display != 'none') {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
            advButton.querySelector('button').textContent = "Удалить рекламу";
        }
        
    });

});
const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');

genre.textContent = 'Драма';
poster.style.backgroundImage = 'url("./img/bg.jpg")';

const movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

movieList.innerHTML = "";



movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
    </li>
    `;
});

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {

        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        if (favorite) {
            console.log("Добавляем любимый фильм");
        }

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();

});


const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

const makeChanges = () => {
    genre.textContent = 'драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';
    
};

const sortArr = (arr) => {
    arr.sort();
};
function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList(films, parent);
        });
    });
}


makeChanges();
createMovieList(movieDB.movies, movieList);