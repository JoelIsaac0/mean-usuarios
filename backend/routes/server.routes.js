const{Router} = require ('express');
 const router=Router();
const user=require('../controllers/users.controllers');
router.get('/',user.getUsers); 
router.post('/registro', user.addUser);
router.post('/ingreso',user.loginUser); 
router.get('/tareas',user.getTasks);
//router.get('/tareas- privadas',user.geTasksPrivate);
module.exports=router;