const sorElement = document.querySelector(".sor");
const cordElement = document.querySelector(".cord");
if (!cordElement) {
    console.error("Element not found!");
    
}

const cardContent = [
    `
    <div class="card mb-3 crd run" style="max-width: 440px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/post2.jpeg" class="img-fluid rounded-start" width="200px" height="60px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <a href="#" class="dur">
               <i class="fa-solid fa-play fa-2xl" style="color: #f6c700;"></i>
                <p>1:40</p>
                </a>
                    <p class="card-text" style="padding-top:0">This is a wider card with supporting text below as a .</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3 crd2 run" style="max-width: 440px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/post3.jpg" class="img-fluid rounded-start" width="200px" height="60px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <a href="#" class="dur">
                <i class="fa-solid fa-play fa-2xl" style="color: #f6c700;"></i>
                <p>1:40</p>
                </a>
                    <p class="card-text" style="padding-top:0">This is a wider card with supporting text below as a .</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3 crd3 run" style="max-width: 440px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/post4.jpg" class="img-fluid rounded-start" width="200px" height="60px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <a href="#" class="dur">
                <i class="fa-solid fa-play fa-2xl" style="color: #f6c700;"></i>
                <p>1:40</p>
                </a>
                    <p class="card-text" style="padding-top:0">This is a wider card with supporting text below as a .</p>
                </div>
            </div>
        </div>
    </div>
    `,
    `
    <div class="card mb-3 crd run" style="max-width: 440px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/post3.jpg" class="img-fluid rounded-start" width="200px" height="60px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                   <a href="#" class="dur">
                <i class="fa-solid fa-play fa-2xl" style="color: #f6c700;"></i>
                <p>1:40</p>
                </a>
                    <p class="card-text" style="padding-top:0">This is a wider card with supporting text below as a .</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3 crd2 run" style="max-width: 440px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/post4.jpg" class="img-fluid rounded-start" width="200px" height="60px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <a href="#" class="dur">
                <i class="fa-solid fa-play fa-2xl" style="color: #f6c700;"></i>
                <p>1:40</p>
                </a>
                    <p class="card-text" style="padding-top:0">This is a wider card with supporting text below as a .</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3 crd3 run" style="max-width: 440px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/post1.webp" class="img-fluid rounded-start" width="200px" height="60px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <a href="#" class="dur">
                <i class="fa-solid fa-play fa-2xl" style="color: #f6c700;"></i>
                <p>1:40</p>
                </a>
                    <p class="card-text" style="padding-top:0">This is a wider card with supporting text below as a .</p>
                </div>
            </div>
        </div>
    </div>
    `,
    `
    <div class="card mb-3 crd run" style="max-width: 440px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/post4.jpg" class="img-fluid rounded-start" width="200px" height="60px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <a href="#" class="dur">
               <i class="fa-solid fa-play fa-2xl" style="color: #f6c700;"></i>
                <p>1:40</p>
                </a>
                    <p class="card-text" style="padding-top:0">This is a wider card with supporting text below as a .</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3 crd2 run" style="max-width: 440px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/post1.webp" class="img-fluid rounded-start" width="200px" height="60px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <a href="#" class="dur">
                <i class="fa-solid fa-play fa-2xl" style="color: #f6c700;"></i>
                <p>1:40</p>
                </a>
                    <p class="card-text" style="padding-top:0">This is a wider card with supporting text below as a .</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3 crd3 run" style="max-width: 440px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/post2.jpeg" class="img-fluid rounded-start" width="200px" height="60px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                   <a href="#" class="dur">
                <i class="fa-solid fa-play fa-2xl" style="color: #f6c700;"></i>
                <p>1:40</p>
                </a>
                    <p class="card-text" style="padding-top:0">This is a wider card with supporting text below as a .</p>
                </div>
            </div>
        </div>
    </div>
    `,
    `
    <div class="card mb-3 crd run" style="max-width: 440px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/post1.webp" class="img-fluid rounded-start" width="200px" height="60px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <a href="#" class="dur">
                <i class="fa-solid fa-play fa-2xl" style="color: #f6c700;"></i>
                <p>1:40</p>
                </a>
                    <p class="card-text" style="padding-top:0">This is a wider card with supporting text below as a .</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3 crd2 run" style="max-width: 440px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/post2.jpeg" class="img-fluid rounded-start" width="200px" height="60px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                   <a href="#" class="dur">
                <i class="fa-solid fa-play fa-2xl" style="color: #f6c700;"></i>
                <p>1:40</p>
                </a>
                    <p class="card-text" style="padding-top:0">This is a wider card with supporting text below as a .</p>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3 crd3 run" style="max-width: 440px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="./assets/img/post3.jpg" class="img-fluid rounded-start" width="200px" height="60px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                   <a href="#" class="dur">
                <i class="fa-solid fa-play fa-2xl" style="color: #f6c700;"></i>
                <p>1:40</p>
                </a>
                    <p class="card-text" style="padding-top:0">This is a wider card with supporting text below as a .</p>
                </div>
            </div>
        </div>
    </div>
    `
];

let currentStyleIndex = 0;

function updateContent() {
    cordElement.innerHTML = cardContent[currentStyleIndex];
    currentStyleIndex = (currentStyleIndex + 1) % cardContent.length; 
}
setInterval(updateContent, 12500);
updateContent();


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

const backToHomeButton = document.getElementById("backToHome");


window.addEventListener("scroll", () => {
  if (window.scrollY > 4000) {
    backToHomeButton.style.display = "block";
  } else {
    backToHomeButton.style.display = "none";
  }
});
backToHomeButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
