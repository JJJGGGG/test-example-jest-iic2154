async function searchProducts() {
    const p = await fetch('https://kitsu.io/api/edge/anime?filter[categories]=adventure',
      {
        Headers: [
          'Accept: application/vnd.api+json',
          'Content-Type: application/vnd.api+json'
        ]
      }
    );
    return await p.json();
}
export default searchProducts;