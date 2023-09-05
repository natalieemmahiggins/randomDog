async function getDog() {
    try {
      const response = await axios.get('https://random.dog/woof.json');
      return(response.data.url);
    } catch (error) {
      console.error(error);
    }
  }

  function updateImg(){
        getDog().then((imgUrl) =>{
        document.querySelector(".dogImg").setAttribute("src", imgUrl)
        });
    }


  document.addEventListener("DOMContentLoaded", function(){
    updateImg();
    document.querySelector(".newDog").addEventListener("click", updateImg);
  })