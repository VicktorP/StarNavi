const getDataFromURL= async (url) => {
    try {
        let response = await fetch(url);

        let json = await response.json();
        return json
    }
    catch(error) {
        alert("Ошибка HTTP: " + error.message);
    }
}

export default getDataFromURL