const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCTpWmtZQ6lolt3y27pwCsdA&part=snippet%2Cid&order=date&maxResults=8";

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f7a6f7ee1amsh911717eafe2459cp149fa1jsnbd21809470cd",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};



async function fetchData(urlPApi) {
  const response = await fetch(API, options);
  const data = await response.json();
  console.log(data);
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    //aca se va a crear el template HTML que itera sobre cada item del resultado recibido de la API
    let view = `
    ${videos.items
      .map(
        (video) => `
    <div class="group relative">
     <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
        >
        <img
            src="${video.snippet.thumbnails.high.url}"
            alt="${video.snippet.description}"
            class="w-full"
        />
     </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
     </div>
    `
      )
      .slice(0, 4)
      .join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error)
    alert(error);
  }
})();



