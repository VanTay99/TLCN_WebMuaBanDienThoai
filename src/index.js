import express from "express";
import mongoose from "mongoose";
import {ApolloServer,gql} from "apollo-server-express";
import{resolvers} from "./resolver";
import {typeDefs} from "./typeDefs";

const server =async ()=> {
    const app=express();
    const  server = new ApolloServer({
        typeDefs,
        resolvers
    })
    server.applyMiddleware({app});
    try{
        await mongoose.connect("mongodb+srv://vantay99:25061999@tlcn-webbandienthoai.64y7e.mongodb.net/Webphone?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true});
        
    }catch(err){
        console.log(err);

    }
   
   app.get('/',(req,res)=>res.send('let go'))
    app.listen({port:4000},()=>{
        console.log('connection')
    })
}
server();[]