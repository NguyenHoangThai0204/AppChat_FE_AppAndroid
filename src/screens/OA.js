import { View, Text, TextInput, FlatList ,Button, TouchableOpacity} from 'react-native';

function OA(){
    return(
        <View>
             <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:"rgb(0,145,255)"}}>
                  {/* icon tìm kiếm */}
                <TouchableOpacity style={{width:'10%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}> <Text>tìm</Text></View>
                 </TouchableOpacity>
                 <TextInput style={{height:50,width:'80%',backgroundColor:"rgb(0,145,255)",color:'white', padding: "5px",fontSize:20}}  placeholder='Tìm kiếm'/>
                 <TouchableOpacity style={{width:'10%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}> <Text>tìm</Text></View>
                 </TouchableOpacity>
                 
            </View>

            <View style={{flexDirection:'row',top:20}}> 
                <TouchableOpacity style={{backgroundColor:"gray",borderWidth:0.1,borderRadius:30,height:50,width:50,marginLeft:15}}> </TouchableOpacity>
                <Text style={{marginLeft:20,fontSize:20}}>Tìm thêm Offical account</Text>
            </View>
        </View>
    )

}
export default OA