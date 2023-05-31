//variables
const COOKIE_NAME = 'theme';
const changeThemeBtn = document.querySelector('.btn');
const body = document.querySelector('body');


//check cookie
const theme = getCookie(COOKIE_NAME) || 'light';
setCookie(COOKIE_NAME, theme, 1);
setTheme('light');

//functions and event handlers
function setCookie(name, value, expires) {
    const date = new Date();
    date.setHours(date.getHours() + expires);
    const expiresUTC = date.toUTCString();

    document.cookie = `${name}=${value}; expires=${expiresUTC}`;
};

function getCookie(name) {
    const cookieValue = document.cookie
        .split(';')
        .find(row => row.startsWith(`${name}=`))
        ?.split('=')[1];

    return cookieValue ? decodeURIComponent(cookieValue) : '';
};

function setTheme(mode) {
    if (mode === 'light') {
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
    }

    setCookie(COOKIE_NAME, mode, 1);
};

function changeThemeHandler(event) {
    const theme = getCookie(COOKIE_NAME);

    if (theme === 'light') {
        setTheme('dark');
        changeThemeBtn.innerText = 'Light mode';
    } else {
        setTheme('light');
        changeThemeBtn.innerText = 'Dark mode';
    }
};

//listeners
changeThemeBtn.addEventListener('click', changeThemeHandler);



//notes - code
const SESSION_STORAGE_NAME = 'note';
const textArea = document.querySelector('#notes');
const note = sessionStorage.getItem(SESSION_STORAGE_NAME) || '';
textArea.innerHTML = note;

function changeHandler(event) {
    const note = event.target.value;
    sessionStorage.setItem(SESSION_STORAGE_NAME, note);
};

textArea.addEventListener('keyup', changeHandler);