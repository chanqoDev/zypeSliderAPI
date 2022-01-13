const options = { method: "GET", headers: { Accept: "application/json" } };

// var promise = import("./config");

// const url = "https://api.zype.com/videos?api_key=";
// const api_key = promise.ZYPE_API_KEY;

// const fetchZypeData = async () => {
//   try {
//     const response = await fetch(`${url}${api_key}`);
//     const data = await response.json();
//     console.log("ZypeData data", data);
//     displayData(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchZypeData();

// const displayData = (data) => {};

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

        $(".grid_screen-container").css({
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gridGap: "10px",
        });

        // iterates the images nested in our data obj
        // creatorsData[i].images.forEach((element) => {
        //   $(".tempImg").attr("src", element.url);
        // });
      }
    }
  })
  .catch((err) => console.error(err));
