import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import fonts from "../../assets/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    containerWrapper: {
        paddingHorizontal: 16,
        flex: 1,
    },
    goBackButton: {
        marginBottom: 20,
        marginTop: 10,
        marginBottom: 20,
        backgroundColor: colors.glacier,
        width: '20%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    goBackButtonText: {
        fontFamily: fonts.InterRegular,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        color: colors.white,
    }
});