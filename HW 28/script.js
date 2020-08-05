const axiosStart = () => {
    axios.get('/serviceavailable/')
        .then(resp => {
            Promise.all([
                axios.get('/getinfo/')
                .then(resp => {
                    if (resp.data.isSuccess === true){
                        return resp.data.text;
                    }
                    return false;
                })
                .catch(() => false),

                axios.get('/getdescription/')
                .then(resp => {
                    if (resp.data.isSuccess === true){
                        return resp.data.text;
                    }
                    return false;
                })
                .catch(() => false),
            ])
            .then(resp => {
                if (!resp[0] && !resp[1])
                    console.log("Ошибка сервера");
                else
                    document.getElementById("error").innerHTML = resp.filter(t => t).join(' ');
            });
        })
        .catch(er => document.getElementById("error").innerHTML = "Какой отпуск? Работа, работа и еще раз работа!")
};


