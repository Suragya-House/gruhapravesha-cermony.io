let language = 'kn';
const languageToggle = document.getElementById('language-toggle');
const guestList = [];
let confirmationCount = 0;

// Translations
const content = {
    kn: {
        mainTitle: 'ಗೃಹ ಪ್ರವೇಶ ಸಮಾರಂಭಕ್ಕೆ ಆತ್ಮೀಯ ಆಮಂತ್ರಣ',
        parent_names: 'ಶ್ರೀ ಸುರೇಶ್. ಪಿ  ಮತ್ತು ಶ್ರೀಮತಿ ಭಾಗ್ಯ',
        names:'ಶ್ರೀ ಸಂತೋಷ್ ಮತ್ತು  ಶ್ರೀ ದರ್ಶನ್ ',
        eventDetailsTitle: 'ಗೃಹಪ್ರವೇಶ ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು',
        eventDetails: [
            'ದಿನಾಂಕ: 11ನೇ ತಾರೀಕು ಮೇ 2025',
            'ಸಮಯ: ಬೆಳಿಗ್ಗೆ 9:00 ಗಂಟೆಗೆ',
            'ಸ್ಥಳ: ನಂ. 04, ಸುರಾಗ್ಯ ನಿವಾಸ, SMG Layout, ಸೇಂಟ್ ಜೋಸೆಫ್ ಸೆಂಟ್ರಲ್ ಸ್ಕೂಲ್, ಹುಯಿಲಾಳು ರೋಡ್, ಇಲವಾಲ, ಮೈಸೂರು'
        ],
        scheduleTitle: 'ಗೃಹವಪ್ರವೇಶ ವೇಳಾಪಟ್ಟಿ',
        schedule: [
            '10 ನೇ ಮೇ 8:00 PM - ಶ್ರೀ ಗಣಪತಿ ಹೋಮ',
            '11 ನೇ ಮೇ 9:00 AM - ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಸ್ವಾಮಿ ಪೂಜೆ',
            '11 ನೇ ಮೇ 1:00 PM - ಮಾಧ್ಯಾಹ್ನ ಭೋಜನ'
        ],
        locationMapTitle: 'ಸ್ಥಳದ ಗುರುತು/ಮ್ಯಾಪ್',
        location:['ಬಸ್ ಮಾರ್ಗ  : 266, 265, 264, 260, 268, 272, 274',
            'ಇಳಿಯುವ ಬಸ್ ನಿಲ್ದಾಣ  : ಲಿಂಗದೇವರಕೊಪ್ಪಲು'
        ],
        home_name:'ಸುರಾಗ್ಯ ನಿವಾಸ',
        rsvpTitle: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಭಾಗವಯಿಸುವಿಕೆಯನ್ನು ದೃಢೀಕರಿಸಿ',
        confirmButton: 'ದೃಢೀಕರಿಸಿ',
        contactTitle: 'ಸಂಪರ್ಕ ವಿವರಗಳು',
        blessingMsg: 'ನಮ್ಮೊಂದಿಗೆ ಈ ವಿಶೇಷ ದಿನವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ! ಸ್ನೇಹದಿಂದ ಕರೆಯುವ ಮನಸ್ಸು ನಮ್ಮದು. ಪ್ರೀತಿಯಿಂದ ಬರುವ ಮನಸ್ಸು ನಿಮ್ಮದು. ಬಂದಾಗ ಸಿಗುವ ಆನಂದ ನಮ್ಮದು..',
        confirmationCount: 'ದೃಢೀಕರಿಸಿದ ಅತಿಥಿಗಳು:',
        contact_list:['ಸುರೇಶ್. ಪಿ : 9964958513', 'ಸಂತೋಷ್. H S: 6360819771', 'ದರ್ಶನ್ H S: 9019799629']
    },
    en: {
        mainTitle: 'Hearty Invitation for the Housewarming Ceremony',
        parent_names: 'Mr. Suresh P. and Mrs. Bhagya',
        names:'Mr. Santhosh and Mr. Darshan',
        eventDetailsTitle: 'Housewarming Event Details',
        eventDetails: [
            'Date: 11th May 2025',
            'Time: 9:00 AM',
            'Venue: No. 04, Suragya Nivasa, SMG Layout, St. Joseph Central School, Huyilalu Road, Ilavala, Mysore'
        ],
        scheduleTitle: 'Housewarming Program Schedule',
        schedule: [
            '10th May 8:00 PM - Shri Ganapati Homa',
            '11th May 9:00 AM - Shri Satyanarayana Swamy Pooja',
            '11th May 1:00 PM - Lunch'
        ],
        home_name:'House of Suragya',
        locationMapTitle: 'Location / Map',
        location:['Bus Routes: 266, 265, 264, 260, 268, 272, 274',
            'Dropping Bus Stop: Lingadevarakoppalu'
        ],
        rsvpTitle: 'Please Confirm Your Attendance',
        confirmButton: 'Confirm',
        contactTitle: 'Contact Details',
        blessingMsg: 'Share this special day with us! The heart that invites is ours, the heart that comes lovingly is yours, and the joy you get on coming is ours.',
        confirmationCount: 'Confirmed Guests:',
        contact_list:['Suresh P : 9964958513', 'Santhosh H S : 6360819771', 'Darshan H S: 9019799629']
    }
};

// Toggle button click
languageToggle.addEventListener('click', () => {
    language = (language === 'kn') ? 'en' : 'kn';
    updateContent();
});

// Content update function
function updateContent() {
    document.getElementById('main-title').innerText = content[language].mainTitle;
    document.getElementById('parent_names').innerText = content[language].parent_names;
    document.getElementById('names').innerText = content[language].names;
    document.getElementById('event-details-title').innerText = content[language].eventDetailsTitle;
    document.getElementById('event-date').innerText = content[language].eventDetails[0];
    document.getElementById('event-time').innerText = content[language].eventDetails[1];
    document.getElementById('event-venue').innerText = content[language].eventDetails[2];

    

    document.getElementById('program-schedule-title').innerText = content[language].scheduleTitle;
    const scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML = '';
    content[language].schedule.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        scheduleList.appendChild(li);
    });

    document.getElementById('location-map-title').innerText = content[language].locationMapTitle;
    document.getElementById('location-map-route').innerText=content[language].location[0];
    document.getElementById('location-map-drop').innerText=content[language].location[1];
    document.getElementById('home_name').innerText=content[language].home_name;
    document.getElementById('rsvp-title').innerText = content[language].rsvpTitle;
    document.querySelector('#rsvp-form button').innerText = content[language].confirmButton;

    document.getElementById('contact-title').innerText = content[language].contactTitle;
    document.getElementById('c1').innerText = content[language].contact_list[0];
    document.getElementById('c2').innerText = content[language].contact_list[1];
    document.getElementById('c3').innerText = content[language].contact_list[2];

    document.getElementById('blessing-msg').innerText = content[language].blessingMsg;

    document.getElementById('confirmation-count').innerText = `${content[language].confirmationCount} ${confirmationCount}`;

    languageToggle.innerText = (language === 'kn') ? 'English' : 'ಕನ್ನಡ';
}

// RSVP Form submit handler
document.getElementById('rsvp-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('guest-name').value;
    const address = document.getElementById('guest-address').value;
    guestList.push({ name, address });

    confirmationCount++;
    document.getElementById('confirmation-count').innerText = `${content[language].confirmationCount} ${confirmationCount}`;

    const guestListEl = document.getElementById('guest-list');
    const li = document.createElement('li');
    li.innerText = `${name} (${address})`;
    guestListEl.appendChild(li);

    document.getElementById('rsvp-form').reset();
});

// Image slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
slides[currentSlide].classList.add('active');

setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 3000);

// Initial content setup
updateContent();
