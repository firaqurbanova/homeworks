import * as Font from 'expo-font';

import MontserratBold from '../assets/fonts/MontserratBold.ttf'
import MontserratMedium from '../assets/fonts/MontserratMedium.ttf'
import MontserratRegular from '../assets/fonts/MontserratRegular.ttf'

export function loadFonts(){
    return(
        Font.loadAsync({
            MontserratBold,
            MontserratMedium,
            MontserratRegular
}
        ) )
    }
    



