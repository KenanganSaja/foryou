/* =========================
   PAGE TRANSITION
========================= */

function nextPage(pageNumber) {

    var pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    setTimeout(function() {

        document.getElementById(
            "page" + pageNumber
        ).classList.add("active");

        window.scrollTo(0, 0);

        createClickHearts();

    }, 50);
}

/* =========================
   CLICK HEART ANIMATION
========================= */

function createClickHearts() {

    for (var i = 0; i < 8; i++) {

        var heart =
            document.createElement("div");


        heart.className =
            "click-heart";


        heart.innerHTML = "♡";


        heart.style.left =
            (45 + Math.random() * 10) + "%";


        heart.style.top =
            (45 + Math.random() * 10) + "%";


        document.body.appendChild(heart);


        setTimeout(function() {

            heart.remove();

        }, 800);

    }

}


/* =========================
   PHOTO ALBUM
========================= */

function openPhoto(image, title, caption) {

    document.getElementById(
        "modalImage"
    ).src = image;


    document.getElementById(
        "modalTitle"
    ).innerHTML = title;


    document.getElementById(
        "modalCaption"
    ).innerHTML = caption;


    document.getElementById(
        "photoModal"
    ).classList.add("show");

}


function closePhoto() {

    document.getElementById(
        "photoModal"
    ).classList.remove("show");

}


/* =========================
   APPRECIATION
========================= */

function showMessage(card) {

    card.classList.toggle("show");

}


/* =========================
   LETTER
========================= */

function startLetter() {

    var text =

        "Dear NurHananie Hafifah Binti Mohd Nahar,\n\n" +

        "Hi bidadariku, \n\n" +

        "To be truth, I have been struggling as we have been in this relationship. I know you know since we have discussed this before, but i still can't shake off this feeling everytime i try to be better for my DEEN and for US. Both of this can't be mix kerana ianya perintah Allah. Saya sedar tapi saya tutup sebelah mata..It hurts, when you know something wrong and need to fix it,but you can't.\n\n" +

        "Saya sebagai lelaki should be 'I need to show a good example and lead you in right direction', bukan hanyut dan berasa selesa dengan perbuatan yang salah. Saya minta maaf kerana tak menjadi lelaki yang tegas dan menunjukkan contoh yang baik untuk awak.\n\n" +

        "Kamu baik sangat sayangg, if possible dan diberikan rezeki saya nak melamar awak je terus. But we're not at the right time yet 😊. Saya taknak jalan cerita yang sama seperti masa silam awak. Saya nak kita ukir cerita dan jalan kita sendiri berlandaskan apa yang Allah redha.\n\n" +

        "If possible, boleh saya minta izin awak untuk saya bawa hubungan kita ke landasan yang betul? not gf/bf.. Kita bermula dengan cara yang salah, tapi tak semestinya salah itu tidak boleh diperbaiki. Allah masih bagi kita peluang lagi untuk bertaubat selagi kita diberi nafas, Insha Allah 🤲. Saya taknak awak salahkan diri awak dan rasa awak bernasib malang okayy. Jika awak tak keberatan, ceritalah pada orang yang kamu percaya dan boleh berikan pandangandan. Kemudian berikanlah jawapan pada saya😊\n\n" +

        "From,\n" +

        "HARRITH SHAHMIE DANIEAL BIN SAMSUL BAHARI";


    var letter =
        document.getElementById("letter");


    document.getElementById(
        "letterStart"
    ).style.display = "none";


    var i = 0;


    function typeWriter() {

        if (i < text.length) {

            if (text.charAt(i) == "\n") {

                letter.innerHTML += "<br>";

            }

            else {

                letter.innerHTML +=
                    text.charAt(i);

            }

            i++;


            setTimeout(
                typeWriter,
                30
            );

        }

        else {

            document.getElementById(
                "letterNext"
            ).style.display =
                "inline-block";

        }

    }


    typeWriter();

}

/* =========================
   QUESTION
========================= */

function answerYes() {

    document.getElementById(
        "answer"
    ).innerHTML =
        " Thank you❤️";


    document.getElementById(
        "questionNext"
    ).style.display =
        "inline-block";


    createFloatingHearts();

}


function answerNo() {

    document.getElementById(
        "answer"
    ).innerHTML =
        "Hmm... think about it again 👀";

}


/* =========================
   FINAL SURPRISE
========================= */

function showSurprise() {

    document.getElementById(
        "surprise"
    ).classList.add("show");


    createFloatingHearts();

}


/* =========================
   FLOATING HEARTS
========================= */

function createFloatingHearts() {

    for (var i = 0; i < 25; i++) {

        var heart =
            document.createElement("div");


        heart.className =
            "floating-heart";


        heart.innerHTML = "♡";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        document.body.appendChild(heart);


        setTimeout(function() {

            heart.remove();

        }, 5000);

    }

}