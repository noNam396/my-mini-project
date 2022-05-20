const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_PHOTO = document.querySelector(".popup img");
const CLOSE_POPUP = document.querySelector(".close_popup");
const NEXT_PHOTO = document.querySelector(".next_photo");
const PREVIOUS_PHOTO = document.querySelector(".previous_photo");

let thumbnailsIndex;

const closePopup = () => {
    POPUP.classList.add("popup_fadeOut");
    setTimeout(() => {
        POPUP.classList.add("hidden");
        POPUP.classList.remove("popup_fadeOut");
    }, 300);
    THUMBNAILS.forEach((element) => {
        element.setAttribute("tabindex", 0);
    });
};

const nextPhoto = () => {
    if (thumbnailsIndex == THUMBNAILS.length - 1) {
        thumbnailsIndex = 0;
    } else {
        thumbnailsIndex++;
    }
    POPUP_PHOTO.src = THUMBNAILS[thumbnailsIndex].src;
};

const previousPhoto = () => {
    if (thumbnailsIndex == 0) {
        thumbnailsIndex = THUMBNAILS.length - 1;
    } else {
        thumbnailsIndex--;
    }
    POPUP_PHOTO.src = THUMBNAILS[thumbnailsIndex].src;
};

THUMBNAILS.forEach((thumbnail, index) => {
    const showPopup = (e) => {
        POPUP.classList.remove("hidden");
        POPUP_PHOTO.src = e.target.src;
        thumbnailsIndex = index;
        THUMBNAILS.forEach((element) => {
            element.setAttribute("tabindex", -1);
        });
    };
    thumbnail.addEventListener("click", showPopup);
    thumbnail.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            showPopup(e);
        }
    });
});

CLOSE_POPUP.addEventListener("click", closePopup);

NEXT_PHOTO.addEventListener("click", nextPhoto);

PREVIOUS_PHOTO.addEventListener("click", previousPhoto);

document.addEventListener("keydown", (e) => {
    if (!POPUP.classList.contains("hidden")) {
        if (e.key == "ArrowRight") {
            nextPhoto();
        }
        if (e.key == "ArrowLeft") {
            previousPhoto();
        }
        if (e.key == "Escape") {
            closePopup();
        }
    }
});

POPUP.addEventListener("click", (e) => {
    if (e.target == POPUP) {
        closePopup();
    }
});