export const validations = {
    checkEmail:function(value){
        const esEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:+)\])/.test(value);
        return !esEmail;
    },
    checkPassword: function(value){
        return value.length <8;
    },
    checkNickname: function(value){
        return value.length<3;
    },
    checkEmpty:function(value){
        return value=== '' || value === undefined || value === null;
    }
}
