const options = { method: "GET", headers: { Accept: "application/json" } };

fetch("data.json", options)
  .then((response) => response.json())
  .then((response) => {
    var data = JSON.stringify(response);
    data = JSON.parse(data);
    for (let info in data) {
      let creatorsData = data[info];
      console.log(creatorsData);
      let sliderLink = ``;
      for (let i = 0; i < creatorsData.length; i++) {
        sliderLink = ` <div class="slider_links">
    <div class="slider_links-title"><a href="#">${creatorsData[i].title}</a></div>
   </div> <div class="grid_screen-container">
    <div class="video_thumbnail-desc">
        <img src="img/Harry Jowsey.jpeg" />
      <div class="item_title_block">
        <div class="video_title"> ${creatorsData[i].title} </div>
        <span class="video_creator_name">${creatorsData[i]._id}</span>
      </div>
    </div>
  </div>
   `;

        let slider = (document.querySelector(".slider_links").innerHTML +=
          sliderLink);
      }
    }
  })
  .catch((err) => console.error(err));

//  document.getElementById("picture").src = data.hdurl;
// document.getElementById("explanation").textContent = data.explanation;

//   const displayData = (data) => {
//     document.getElementById("title").textContent = data.title;
//   document.getElementById("date").textContent = data.date;
//   document.getElementById("picture").src = data.hdurl;
//     document.getElementById("explanation").textContent = data.explanation;
// };
