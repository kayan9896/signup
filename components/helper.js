import { StyleSheet } from "react-native";
export const colour= {
    white:'#ffffff',
    lightblue:'#3b5998',
    darkblur:'#192f6a',
    black:'#000',
    grey:'#808080',
}
export default helper = StyleSheet.create({
    container: {flex:1, paddingTop:30}, 
    titlecontainer:{alignItems:'center',marginHorizontal:150,borderWidth: 3},
    cardin:{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'grey' },
    cardcontainer:{
        flex: 0.5,
        justifyContent: 'center',
        margin:30,
        //style for rounded corner and shadow
        borderRadius: 10,
        borderColor:colour.grey,
        borderWidth:10,
        shadowColor: colour.black,
        shadowOffset: {
          width: 4,
            height: 4,
        },
        shadowOpacity: 0.58,
        elevation: 14,
      },
    space:{width:20,height:20},

});
