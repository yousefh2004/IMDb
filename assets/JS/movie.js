function initModal(triggerClass) {
    const modal = document.querySelector(".my-modal"); 
    const closeBtn = document.querySelector(".close-btn"); 
    const messageBox = modal.querySelector(".message"); 

    document.querySelectorAll(triggerClass).forEach(trigger => {
        trigger.addEventListener("click", () => {
            modal.classList.remove("d-none");

            if (trigger.classList.contains("movie")) {
                messageBox.textContent = "Black Adam";
            } else if (trigger.classList.contains("movie1")) {
                messageBox.textContent = "Avengers Endgame";
            } else if (trigger.classList.contains("movie2")) {
                messageBox.textContent = "Spider-Man sol.3";
            } else if (trigger.classList.contains("movie3")) {
                messageBox.textContent = "Venom sol.3";
            } else if (trigger.classList.contains("movie4")) {
                messageBox.textContent = "Harry Potter sol.5";
            }
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("d-none"); 
    });
}

initModal(".movie");
initModal(".movie1");
initModal(".movie2");
initModal(".movie3");
initModal(".movie4");





const stars = document.querySelectorAll('.storr a i');
let s = -1;
const modal = document.querySelector('.my-modal');
const rate = document.querySelector('.rat');

stars.forEach((star, ii) => {
    star.addEventListener('mouseover', () => {
        if (s === -1) {
            updateStars(ii);
        }
    }
);

    star.addEventListener('mouseout', () => {
        if (s === -1) {
            resetStars();
        }
    }
);

    star.addEventListener('click', () => {
        s = ii;
        updateStars(ii);
    }
);
}
);

function updateStars(ii) {
    stars.forEach((s, i) => {
        if (i <= ii) {
            s.classList.add('fa-solid');
            s.style.color = '#F6C700';
        } else {
            s.classList.remove('fa-solid');
            s.style.color = '';
        }
    }
);
}

function resetStars() {
    stars.forEach(s => {
        s.classList.remove('fa-solid');
        s.style.color = '';
    }
);
}

rate.addEventListener('click', () => {
    if (s !== -1) {
        modal.classList.add('d-none');
    }
}
);