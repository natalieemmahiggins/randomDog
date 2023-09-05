async function getDog() {
    try {
      const response = await axios.get('https://random.dog/woof.json');
      return(response.data.url);
    } catch (error) {
      console.error(error);
    }
  }

  getDog().then((imgUrl) =>{
    document.querySelector(".dogImg").setAttribute("src", imgUrl)
  });