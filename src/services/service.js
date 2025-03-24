export async function dummyApi() {
    const response = await fetch('https://dummyjson.com/productt')
    response.json();
}