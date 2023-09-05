
async function getDog() {
    try {
      const response = await axios.get('https://random.dog/woof.json');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  getDog();