function setCookie(key, value) {
    Cookies.set(key, value, { expires: 365, path: '/' });
}

function setStorage(key, value) {
    localStorage.setItem(key, value);
}

function getCookie(key) {
    return Cookies.get(key);
}

function getStorage(key) {
    return localStorage.getItem(key);
}

if (location.search.startsWith("?cookies")) {
    var setMethod = setCookie;
    var getMethod = getCookie;
} else {
    var setMethod = setStorage;
    var getMethod = getStorage;
}

window.addEventListener('load', function() {
    const form = document.getElementById('dataForm');
    const methodToggle = document.getElementById('methodToggle');

    methodToggle.checked = setMethod == setStorage;
    methodToggle.addEventListener('change', handleMethodToggle);
    form.addEventListener('submit', handleFormSubmit);
    loadStoredForm(form);
});


function handleFormSubmit(e) {
    for (let child of e.target.elements) {
        if (child.name) {
            if (child.type == "checkbox") {
                setMethod(child.name, child.checked ? "on" : "off");
            }
            else {
                setMethod(child.name, child.value);
            }
        }
    }
    alert("Данные сохранены!");
    e.preventDefault();
}

function loadStoredForm(form) {
    for (let child of form.elements) {
        if (child.name) {
            if (child.type == "checkbox") {
                child.checked = getMethod(child.name) == "on";
            }
            else {
                child.value = getMethod(child.name);
            }
        }
    }
}

function handleMethodToggle() {
    if (setMethod != setStorage)
        location.replace("/?storage");
    else
        location.replace("/?cookies");
}