import { fetchApi } from '../service/apiFetch'
import { ResultAlert } from './alert.actions'
import AsyncStorage from '@react-native-community/async-storage';

export const SignIn = async (data) => {
    const result = await fetchApi("/login", "POST", data, 200);
    
    if (ResultAlert(result)) {
        await AsyncStorage.setItem('@token', result.token);
        await AsyncStorage.setItem('@auth', JSON.stringify(result.result));
        return true
    }

    return false;
}