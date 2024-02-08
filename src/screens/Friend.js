import { View, Text, TextInput, FlatList ,Button, TouchableOpacity, StyleSheet} from 'react-native';
import { createSheet } from 'react-native-web/dist/cjs/exports/StyleSheet/dom';

function Friend(){
    return(
        <View>

            <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:"rgb(0,145,255)"}}>
                  {/* icon tìm kiếm */}
                <TouchableOpacity style={{backgroundColor:"rgb(0,145,255)",width:'10%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}> <Text>tìm</Text></View>
                 </TouchableOpacity>
                 <TextInput style={{height:40,width:'80%',backgroundColor:"rgb(0,145,255)"}} placeholder='tìm kiếm'/>
                 <TouchableOpacity style={{width:'10%',alignItems:'center',justifyContent:'center'}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}> <Text>tìm</Text></View>
                 </TouchableOpacity>
            </View>

            <View style={{flexDirection:'column'}}>
                    <TouchableOpacity style={styles.listadd}>
                        <View>
                            <Text style={{fontSize:20,paddingLeft:30}}>Lời mời kết bạn</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity   style={styles.listadd}>
                        <View>
                            <Text style={{fontSize:20,paddingLeft:30}}>Danh bạ máy</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity   style={styles.listadd}>
                        <View>
                            <Text style={{fontSize:20,paddingLeft:30}}>Lịch sinh nhật</Text>
                        </View>
                    </TouchableOpacity>


            </View>

            <View style={{flexDirection:'row',}}>

                <TouchableOpacity style={styles.showlist}><View style={{ alignContent:'center',justifyContent:'center'}}><Text style={{fontSize:20,paddingLeft:25}}>Tất cả</Text></View></TouchableOpacity>
                <TouchableOpacity style={styles.showlist}><View style={{ alignContent:'center',justifyContent:'center'}}><Text style={{fontSize:20}}>Mới truy cập</Text></View></TouchableOpacity>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    listadd :{
        height:20,
        width: '100%',
        padding:30
    },
    showlist:{
        margin:15,
        borderRadius:15,
        borderColor:'gray',
        borderWidth:1,
        top:15,
        width:'30%',
        justifyContent:'center',
        alignContent:'center'
       
    }
})


export default Friend