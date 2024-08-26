export const getBossData = async () => {
    const res = await fetch('/boss-data/data.json');
    return await res.json();
}