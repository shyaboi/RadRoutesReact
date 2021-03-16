
const fetchy = async (address) => {
    let res = await fetch(address);
    let data = await res.json();
    return data;
  };

  export default fetchy