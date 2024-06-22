document.addEventListener('DOMContentLoaded', function() {
    const toGreetings2Button = document.querySelector('.to-grettings2');
    const greetings1Div = document.querySelector('.greetings1');
    const greetings2Div = document.querySelector('.greetings2');
    const fillingDiv = document.querySelector('.filling');
    const lyricDiv = document.querySelector('.lyric1');
    const audio = document.getElementById('background-music');
    const progressBar = document.querySelector('.waiting-bar .progress');

    const lyrics = [
        "Heart beats fast",
        "Colors and promises",
        "How to be brave?",
        "How can I love when I'm afraid to fall?",
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

    toGreetings2Button.addEventListener('click', function() {
        greetings1Div.style.display = 'none';
        greetings2Div.style.display = 'flex';
        audio.play();

        setTimeout(function() {
            greetings2Div.style.display = 'none';
            fillingDiv.style.display = 'flex';
            showNextLyric();

            setTimeout(function() {
                // Transition to filling2 after 27 seconds
                fillingDiv.style.display = 'none';
                const filling2Div = document.querySelector('.filling2');
                filling2Div.style.display = 'flex';
            }, 35000); // 27 seconds
        }, 20000); // Transition to filling after 20 seconds
    });


});

document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photos img');

    // Function to check if an element is in view
    const isInView = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.8;
    };

    // Function to reveal photos when they come into view
    const revealPhotos = () => {
        photos.forEach((photo, index) => {
            if (isInView(photo)) {
                setTimeout(() => {
                    photo.style.opacity = 1;
                }, index * 200); // Adjust the delay as needed
            }
        });
    };

    // Initial reveal on page load
    revealPhotos();

    // Reveal photos on scroll
    window.addEventListener('scroll', revealPhotos);
});
