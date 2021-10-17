async function getData() {
    try {
        const response = await fetch('https://run.mocky.io/v3/3413d3f4-6559-4e47-9bf7-4923ef3489b0');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default getData;
