const User=require('../models/User');
const usersController={};
const  jwt = require('jsonwebtoken');

usersController.getUsers=async(req,res)=>
{
    res.send('Bienvenido al backend de Gestion Usuarios 2.0');
}

usersController.addUser= async(req,res)=>{
    res.send('Registro de nuevo usuario'); 
}

usersController.addUser= async(req,res)=>{
    res.send('Registro de nuevo usuario'); console.log(req.body);
       const{email,password}=req.body;
    const newUser= new User({email:email, password:password});
     console.log(newUser);
     await newUser.save();
}

usersController.addUser=
async(req,res)=>{
const{email,password}=req.body;
const newUser= new User({email:email,
password:password});
await newUser.save();
const token=jwt.sign({_id: newUser._id},'secretkey');
res.status(200).json({token}); }

usersController.loginUser= async(req,
    res)=> {
   const{email,password}=req.body;
       
   const user=await User.findOne({email})
   if(!user)
        return res.status(401).send("El correo no existe");
   if(user.password!=password) 
        return res.status(401).send("Clave incorrecta");
       
    const token=jwt.sign({_id:user._id},'secretkey'); 
        return res.status(200).json({token});
}


function verificarToken(req, res, next){ console.log(req.headers.authorization);
    if(!req.headers.authorization) {
    return res.status(401).send("No tiene autorización para continuar");
    }
    const
    token=req.headers.authorization.split(' ')[1]
    if(token=='null')
    {
    return res.status(401).send("No existe token");
        }
    const
    payload=jwt.verify(token,'secretkey'); console.log(payload); req.userId=payload._id;
    next();
    }

usersController.getTasks=async(req,res)=> {
    res.json([ {
    _id:1, name:'Tarea1',
    descripcion:'Informacion tarea1' },
    {
    _id:2,
    name:'Tarea2',
    descripcion:'Informacion tarea2' },
    {
    _id:3,
    name:'Tarea3',
    descripcion:'Informacion tarea3' }
    ])
}

module.exports=usersController;