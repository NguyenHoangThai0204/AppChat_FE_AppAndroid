import { View, Text, TextInput, FlatList ,Button, TouchableOpacity} from 'react-native';

function Group(){
    return(
        <View>
              <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:"rgb(0,145,255)"}}>
                  {/* icon tìm kiếm */}
                <TouchableOpacity style={{width:'10%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}> <Text>tìm</Text></View>
                 </TouchableOpacity>
                 <TextInput style={{height:40,width:'80%',backgroundColor:"rgb(0,145,255)"}} placeholder='tìm kiếm'/>
                 <TouchableOpacity style={{width:'10%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}> <Text>tìm</Text></View>
                 </TouchableOpacity>
                 
            </View>

            <View style={{flexDirection:'row',top:20}}> 
                <TouchableOpacity style={{backgroundColor:"gray",borderWidth:0.1,borderRadius:30,height:50,width:50,marginLeft:15}}> </TouchableOpacity>
                <Text style={{marginLeft:20,fontSize:20}}>Tạo nhóm mới</Text>
            </View>
            <View style={{top:30}}><Text style={{fontSize:20}}>Tính năng nổi bật</Text></View>
            <View style={{flexDirection:'row',top:30}}>
                    <TouchableOpacity style={{backgroundColor:"gray",borderWidth:0.1,borderRadius:20,height:60,width:60,margin:15}}></TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"gray",borderWidth:0.1,borderRadius:20,height:60,width:60,margin:15}}></TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"gray",borderWidth:0.1,borderRadius:20,height:60,width:60,margin:15}}></TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:"gray",borderWidth:0.1,borderRadius:20,height:60,width:60,margin:15}}></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',top:20}}>
                    <Text style={{fontSize:17,marginLeft:35,marginRight:20}}>Lịch </Text>    
                    <Text style={{fontSize:17,marginRight:10}}>Nhắc hẹn </Text>   
                    <Text style={{fontSize:17,marginRight:10}}>Nhóm offline </Text>   
                    <Text style={{fontSize:17,}}>Chia sẻ ảnh </Text>   

            </View>
        </View>
    )

}
export default Group