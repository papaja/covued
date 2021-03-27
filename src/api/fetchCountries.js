export default async function fetchCountries() {
    try {
        const url = "https://api.covid19api.com/summary";
        const response = await fetch(url);

        if (!response.ok)
            throw new Error(response.statusText);

        const data = await response.json();
        if (!data)
            throw new Error("Got null from response, expected json");

        return data.Countries;
    } catch (err) {
        console.log(err);
    }
}
