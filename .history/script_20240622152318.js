document.addEventListener('DOMContentLoaded', function() {
    const toGreetings2Button = document.querySelector('.to-grettings2');
    const greetings1Div = document.querySelector('.greetings1');
    const greetings2Div = document.querySelector('.greetings2');
    const fillingDiv = document.querySelector('.filling');
    const lyricDiv = document.querySelector('.lyric1');
    const filling2Div = document.querySelector('.filling2');
    const audio = document.getElementById('background-music');
    const progressBar = document.querySelector('.waiting-bar .progress');
    const photos = document.querySelectorAll('.photos img');

    const lyrics = [
        "Heart beats fast",
        "Colors and promises",
        "How to be brave?",
        "How can I love",
        "when I'm afraid to fall?",
        "But watching you stand alone",
        "All of my doubt",
        "suddenly goes away somehow",
        "One step closer"
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

    toGreetings2Button.addEventListener('click', function() {
        greetings1Div.style.display = 'none';
        greetings2Div.style.display = 'flex';
        audio.play();

        // Start the loading bar animation
        progressBar.style.width = '100%';

        setTimeout(function() {
            greetings2Div.style.display = 'none';
            fillingDiv.style.display = 'flex';
            showNextLyric();

            setTimeout(function() {
                // Transition to filling2 after 35 seconds
                fillingDiv.style.display = 'none';
                filling2Div.style.display = 'flex';
                showNextPhoto(0);
            }, 35000); // 35 seconds
        }, 20000); // Transition to filling after 20 seconds
    });
});
