const curLike = document.getElementById("like-img");
const likeButton = document.getElementById("like-button");

likeButton.addEventListener("click", () => {
    if (curLike.src.includes("heart")) curLike.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
    else curLike.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
});