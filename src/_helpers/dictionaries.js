
function CleanDictionary(dict) {
    Object.keys(dict).forEach(
        (key) => dict[key] === "" && delete dict[key]
      );
  }
export default CleanDictionary
;



