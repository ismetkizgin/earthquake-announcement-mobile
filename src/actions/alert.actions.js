import { Alert } from 'react-native';

const alert = (title, message) => {
    Alert.alert(title, message, [
        { text: "Tamam" }
    ],
        { cancelable: false })
}

export const ResultAlert = (response) => {
    switch (response.status) {
        case true:
            return true;
        case 404:
            alert('Uyarı', response.message);
            return false
        case 500:
            alert('Hata', response.message);
            return false
        case false:
            alert('Uyarı', 'Lütfen bilgileri tam girdiğinizden emin olun !')
            return false
        default:
            alert('Hata', 'Beklenmedik bir hata oluştur lütfen daha sonra tekrar deneyin.');
            return
    }
}