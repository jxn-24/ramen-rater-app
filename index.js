
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
        img.dataset.id = ramen.id;

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
  const detailImage = document.querySelector("#ramen-details img");
  const name = document.querySelector("#ramen-details .name");
  const restaurant = document.querySelector("#ramen-details .restaurant");
  const rating = document.querySelector("#ramen-details .rating");
  const comment = document.querySelector("#ramen-details .comment");

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

function deleteRamen(ramen) {
  const index = ramens.findIndex(r => r.id === ramen.id);
  if (index !== -1) {
      ramens.splice(index, 1); 
      const ramenMenu = document.getElementById("ramen-menu");
      ramenMenu.innerHTML = ""; 
      displayRamens(); 
      if (ramens.length > 0) {
          handleClick(ramens[0]); 
      } else {
          // 
          const detailImage = document.querySelector("#ramen-detail img");
          const name = document.querySelector("#ramen-detail .name");
          const restaurant = document.querySelector("#ramen-detail .restaurant");
          const rating = document.querySelector("#ramen-detail .rating");
          const comment = document.querySelector("#ramen-detail .comment");

          detailImage.src = "";
          detailImage.alt = "";
          name.textContent = "";
          restaurant.textContent = "";
          rating.textContent = "";
          comment.textContent = "";
      }
  }
}

function addSubmitListener() {
  const form = document.getElementById("new-Ramen");

  form.addEventListener("submit", (e) => {
      e.preventDefault(); 


      const name = document.getElementById("new-name").value;
      const restaurant = document.getElementById("new-restaurant").value;
      const image = document.getElementById("new-image").value;
      const rating = document.getElementById("new-rating").value;
      const comment = document.getElementById("new-comment").value;

      // new ramen object 
      const newRamen = {
          id: ramens.length + 1,
          name,
          restaurant,
          image,
          rating,
          comment
      };
      // Adding the new ramen to the ramens array
      ramens.push(newRamen);

      
      const ramenMenu = document.getElementById("ramen-menu");
      const img = document.createElement("img");
      img.src = newRamen.image;
      img.alt = newRamen.name;
      img.dataset.id = newRamen.id;
      img.className = "ramen-image";

      
      img.addEventListener("click", () => handleClick(newRamen));

      ramenMenu.appendChild(img);

      form.reset();
    });
}

function main() {
  displayRamens();
  addSubmitListener();
}


document.addEventListener("DOMContentLoaded", main);

