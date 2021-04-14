/**
 * Created by ITShpere on 4/12/2021.
 */
import mongoose from 'mongoose';

function initDB(){
    if(mongoose.connections[0].readyState){
        console.log('Already connected')
    }
    mongoose.connect(process.env.DB_HOST,
        {useNewUrlParser: true, useUnifiedTopology: true}
        );
    mongoose.connection.on('connected',()=>{
        console.log('Connected')
    })
    mongoose.connection.on('error',()=>{
        console.log('Error')
    })
}
export default initDB
