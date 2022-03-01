const accountObj = (accObj) =>{
    return{
        AccountNo: accObj.token,
        name: accObj.name,
        phone: accObj.phone,
        balance: accObj.balance,
        currency: accObj.currency
    }
}

module.exports = {
    accountSetter: (list) =>{
        const accountList = [];
        for(let i = 0; i < list.length; i++){
            accountList.push(accountObj(list[i]))
        }

        return accountList;
    }
}