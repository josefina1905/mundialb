import  express from 'express';
import { grupoCSeleccionController } from './controllers/grupoController.js';
import {loginController, logoutController} from './controllers/sessions-controllers.js';

const app = express();
app.use(express.json());


app.post('/login', loginController)
app.post('/logout', logoutController)
app.get('/grupo', grupoCSeleccionController)




app.listen (3000, () =>
console.log('REST API server ready at: http://localhost:3000'),
);