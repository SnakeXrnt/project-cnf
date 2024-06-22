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
        "When I'm afraid to fall?",
        "But watching you stand alone",
        "All of my doubt suddenly goes away somehow"
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
            }, 35000); // Transition to filling2 after 35 seconds
        }, 20000); // Transition to filling after 20 seconds
    });
});
