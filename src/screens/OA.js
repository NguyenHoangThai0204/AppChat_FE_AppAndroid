import { View, Text, TextInput, FlatList ,Button, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function OA(){
    return(
        <View>
            <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:"rgb(0,145,255)"}}>
                  {/* icon tìm kiếm */}
                <TouchableOpacity style={{backgroundColor:"rgb(0,145,255)",width:'10%',alignItems:'center',justifyContent:'center'}}>
                <MaterialIcons name="search" size={30} color={"white"} padding={"5px"} />
                 </TouchableOpacity>
                 <TextInput style={{height:50,width:'80%',backgroundColor:"rgb(0,145,255)",color:'white', padding: "5px",fontSize:20}}  placeholder='Tìm kiếm'/>
                 <TouchableOpacity style={{width:'10%',alignItems:'center',justifyContent:'center'}}>
                 <AntDesign name="qrcode" size={30} color={"white"} padding={"5px"} />
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