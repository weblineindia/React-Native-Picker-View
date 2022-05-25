import { StyleSheet, Platform } from 'react-native';
import { ScreenWidth, Black, Grey, PrimaryDark, White, Separator, IPhoneX } from './Globals';

module.exports = StyleSheet.create({
    ModelContainerView: {
        backgroundColor: Grey,
    },
    Container: {
        flex: 1,
        opacity: 1,
        alignItems: 'center',
        justifyContent: Platform.OS === 'android' ? 'center' : 'flex-end',
    },
    MainView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
        backgroundColor: Black,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    WhiteView: {
        paddingBottom: IPhoneX ? 15 : 0,
        backgroundColor: White,
        borderRadius: 10,
        width: Platform.OS === 'android' ? '76%' : '100%',
    },
    titleView: {
        // backgroundColor: Blue,
        alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    titleTxt: {
        padding: 10,
        width: Platform.OS === 'android' ? ScreenWidth * 0.76 : ScreenWidth,
        fontSize: 20,
        fontWeight: '700',
        color: White,
        textAlign: 'center',
    },
    dashView: {
        height: 1,
        backgroundColor: Separator,
        opacity: 0.4
    },
    bankListItemView: {
        paddingVertical: 12,
    },
    itemTxt: {
        textAlign: 'center',
        color: PrimaryDark,
        fontWeight: '300'
    },
    ButtonMainView: {
        flexDirection: 'row',
    },
    CancelView: {
        flex: 1,
    },
    CancelText: {
        textAlign: 'center',
        padding: 13,
        color: Black,
        fontSize: 17,
        fontWeight: '600',
    }
});
