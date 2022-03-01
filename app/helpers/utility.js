const numberSubToken = () => {
    const numToken = Math.floor(Math.random() * 1000000).toString();
    if (numToken.length < 6) return numberSubToken;
    return numToken;
}
module.exports = {
    /*
  numberSubToken() ---> create 5 digit random number
  getRandomIndex() ---> create new index for array less then 52
  stringSubToken() ---> create random string length 5
  getToken()       ---> create final unique token
  */
    numberSubToken,
    getToken: (content) => {



        const getRandomIndex = () => {
            const index = Math.floor(Math.random() * 100);
            if (index < 52) {
                return index;
            } else {
                return getRandomIndex();
            }
        }

        const stringSubToken = () => {
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            let stToken = "";
            for (let i = 0; i < 5; i++) {
                stToken += characters[getRandomIndex()];
            }
            return stToken;
        }

        return numberSubToken() + stringSubToken() + content + stringSubToken() + numberSubToken()
    }
}
