function validate(data) {
    const { login, password, confirmPassword, license,firstName,lastName,gender } = data;

    if (!login || !password || !firstName || !lastName) {
        alert('Все поля со звездочкой являются обязательными');
    } else if (login == "beeline" || login =="beeinterns" || login =="bee") {
        alert('Данный логин уже занят, выберите другое значение');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
        alert(`Уважаем${gender === 'male'? 'ый': 'ая'} ${firstName}, заявка создана`);
    }
}
