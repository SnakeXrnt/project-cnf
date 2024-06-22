document.addEventListener('DOMContentLoaded', function() {
    const toGreetings2Button = document.querySelector('.to-grettings2');
    const toFilling3Button = document.querySelector('.to-filling3');
    const greetings1Div = document.querySelector('.greetings1');
    const greetings2Div = document.querySelector('.greetings2');
    const fillingDiv = document.querySelector('.filling');
    const lyricDiv = document.querySelector('.lyric1');
    const filling2Div = document.querySelector('.filling2');
    const filling3Div = document.querySelector('.filling3');
    const audio = document.getElementById('background-music');
    const progressBar = document.querySelector('.waiting-bar .progress');
    const photos = document.querySelectorAll('.photos img');
    const filling3Paragraphs = document.querySelectorAll('.filling3 p');

    const lyrics = [
        "Heart beats fast",
        "Colors and promises",
        "How to be brave?",
        "How can I love",
        "When I'm afraid to fall?",
        "But watching you stand alone",
        "All of my doubt",
        "Suddenly goes away somehow",
        "One Step Closer"
    ];

    let currentLyricIndex = 0;

    function showNextLyric() {
        if (currentLyricIndex < lyrics.length) {
            const lyricLine = document.createElement('p');
            lyricLine.textContent = lyrics[currentLyricIndex];
            lyricLine.classList.add('fade-in');
            lyricDiv.appendChild(lyricLine);
            currentLyricIndex++;
            setTimeout(showNextLyric, 4000); // Adjust the delay as needed
        }
    }

    function showNextPhoto(index) {
        if (index < photos.length) {
            photos[index].style.opacity = '1';
            setTimeout(function() {
                showNextPhoto(index + 1);
            }, 2000); // Delay for each photo appearance
        }
    }

    function autoScrollFilling2() {
        const scrollStep = 1; // Adjust the scroll step as needed
        const scrollInterval = 20; // Adjust the interval as needed

        function scroll() {
            if (filling2Div.scrollTop < filling2Div.scrollHeight - filling2Div.clientHeight) {
                filling2Div.scrollTop += scrollStep;
                setTimeout(scroll, scrollInterval);
            }
        }
        scroll();
    }

    function showNextFilling3Paragraph(index) {
        if (index < filling3Paragraphs.length) {
            filling3Paragraphs[index].classList.add('fade-in');
            setTimeout(function() {
                showNextFilling3Paragraph(index + 1);
            }, 3000); // Delay for each paragraph appearance (3 seconds)
        }
    }

    toGreetings2Button.addEventListener('click', function() {
        greetings1Div.style.display = 'none';
        greetings2Div.style.display = 'flex';
        audio.play();

        // Start the loading bar animation
        if (progressBar) {
            progressBar.style.width = '100%';
        }

        setTimeout(function() {
            console.log('Switching to filling div...');
            if (greetings2Div) {
                greetings2Div.style.display = 'none';
            }
            if (fillingDiv) {
                fillingDiv.style.display = 'flex';
            }
            showNextLyric();

            setTimeout(function() {
                console.log('Switching to filling2 div...');
                if (fillingDiv) {
                    fillingDiv.style.display = 'none';
                }
                if (filling2Div) {
                    filling2Div.style.display = 'flex';
                }
                showNextPhoto(0);
                autoScrollFilling2();
            }, 43000); // Transition to filling2 after 35 seconds
        }, 20000); // Transition to filling after 20 seconds
    });

    toFilling3Button.addEventListener('click', function() {
        if (filling2Div) {
            filling2Div.style.display = 'none';
        }
        if (filling3Div) {
            filling3Div.style.display = 'flex';
        }
        showNextFilling3Paragraph(0);
    });
});
