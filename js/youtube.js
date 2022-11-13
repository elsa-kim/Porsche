// AIzaSyDOOajgKtLANek3wwbMjUkjqSQ-Eb7rvuI
// http://www.googleapis.com/youtube/v3/playlistItems

const vidList = document.querySelectorAll(".video");
const key = "AIzaSyDOOajgKtLANek3wwbMjUkjqSQ-Eb7rvuI";
const playlistId = "PL_Qbhr9Uo_kfWUhValgYOnEgXW7KA5NNP";
const num = 4;

const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    let items = json.items;
    let result = "";

    const vidArr = items.map((item) => {
      result = `
                <iframe src="https://www.youtube.com/embed/${item.snippet.resourceId.videoId}" frameborder="0" class="vidPlay"></iframe>
                `;

      return result;
    });

    const vidLength = vidList.length;

    for (i = 0; i < vidLength; i++) {
      vidList[i].innerHTML = vidArr[i];
    }
  });
