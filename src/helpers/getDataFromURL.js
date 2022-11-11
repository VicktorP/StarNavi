const getDataFromURL= async (url) => {
    let response = await fetch(url);

    try {
        let json = await response.json();
        return json
    }
    catch(error) {
        alert("Ошибка HTTP: " + response.status);
    }
}

export default getDataFromURL