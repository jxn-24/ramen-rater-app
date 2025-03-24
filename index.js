//Data
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/Shoyu Ramen.jpeg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Spicy Miso Ramen", restaurant: "Menya", image: "images/Spicy Miso Ramen.jpeg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/Tonkotsu Ramen.jpeg", rating: 4.5, comment: "Creamy and Satisfying" },
    { id: 4, name: "Gochujang Ramen", restaurant: "Shokudo", image: "images/Gochujang Miso Ramen.jpg", rating: 8, comment: "A bit tasty, innit!" },

 ];


 //Display Ramen images
  function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.className = "ramen-image";

        img.addEventListener("click",()=> handleClick(ramens));
        ramenMenu.appendChild(img);
    });

    //Display Ramen details

    if(ramens.length > 0 ){
        handleClick(ramens[0]);
    
  }
}

// Function to handle click events on ramen images
function handleClick(ramen) {
  const detailImage = document.querySelector("#ramen-detail img");
  const name = document.querySelector("#ramen-detail .name");
  const restaurant = document.querySelector("#ramen-detail .restaurant");
  const rating = document.querySelector("#ramen-detail .rating");
  const comment = document.querySelector("#ramen-detail .comment");

  // Update the ramen-detail div 
  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  rating.textContent = `Rating: ${ramen.rating}/10`;
  comment.textContent = `Comment: ${ramen.comment}`;

  // Update the edit form 
  document.getElementById("edit-rating").value = ramen.rating;
  document.getElementById("edit-comment").value = ramen.comment;

  
  const editForm = document.getElementById("edit-ramen");
  editForm.onsubmit = (e) => {
      e.preventDefault();
      ramen.rating = document.getElementById("edit-rating").value;
      ramen.comment = document.getElementById("edit-comment").value;
      handleClick(ramen); // Refresh the displayed details
  };

  const deleteButton = document.getElementById("delete-ramen");
  deleteButton.onclick = () => deleteRamen(ramen);
}
