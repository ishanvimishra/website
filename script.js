// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Select all the .border-item elements
    var borderItems = document.querySelectorAll('.border-item');

    // Define an array of image URLs and their corresponding text
    var imageTextPairs = [
        { imageUrl: 'dog.jpeg', text: 'MAXXX <3 hes the fluffiest and so smiley!!' },
        { imageUrl: 'cake.jpeg', text: 'i love eating and making cake yummy' },
        { imageUrl: 'reading.jpeg', text: 'ive read all of booktok pls send help' },
        { imageUrl: 'roblox.jpeg', text: 'ROBLOX!! literally the best thing to ever exist' },
        { imageUrl: 'digi.jpeg', text: 'my digi cam has my heart' },
        { imageUrl: 'keychains.jpeg', text: 'collecting keychains is why i travel!!' },
        { imageUrl: 'jhumka.jpeg', text: 'connecting to my culture by making earrings!' },
        { imageUrl: 'uno.jpeg', text: 'i go crazy for uno no shame ' },
        { imageUrl: 'astrology.jpeg', text: 'double cancer! (i cry when i see cute tiktoks)' },
        { imageUrl: 'crochet.jpeg', text: 'I WANNA LEARN HOW TO CROCHET SO BAD' },
        { imageUrl: 'concert.jpeg', text: 'my concert lineup slays so hard (taylor, weeknd, harry, olivia, etc!)' },
        { imageUrl: 'painting.jpeg', text: 'my form of therapy is art i love it so much ' },
        { imageUrl: 'juice.jpeg', text: 'im such a juice chugger i can finish it in seconds' },
        { imageUrl: 'music.jpeg', text: 'you will always see me listening to music i swear' },
    ];

    // Add a click event listener to each .border-item
    borderItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            // Get the image inside the clicked .border-item
            var img = item.querySelector('img');

            // Toggle the display style of both the image and text
            if (img.style.display === 'none' || img.style.display === '') {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }

            // Get the dynamic text element
            var dynamicText = document.getElementById('dynamic-text');

            // Update the text based on the clicked image
            dynamicText.textContent = imageTextPairs[index].text;
        });
    });
});
