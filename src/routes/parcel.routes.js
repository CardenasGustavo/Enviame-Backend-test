import {Router} from 'express'
const router = Router()
import * as parcelCtrl from '../controllers/parcel.controller'
import { authJwt } from "../middlewares";

router.get('/',
[authJwt.verifyToken, authJwt.isUser],
parcelCtrl.getParcels
);

router.post('/',
[authJwt.verifyToken, authJwt.isUser],
 parcelCtrl.createParcel
 );

router.get('/:parcelId', 
[authJwt.verifyToken, authJwt.isUser],
parcelCtrl.getParcelByid
);

router.put('/:parcelId', 
[authJwt.verifyToken, authJwt.isUser],
parcelCtrl.updateParcelById
);

router.delete('/:parcelId', 
[authJwt.verifyToken, authJwt.isAdmin],
parcelCtrl.deleteParcelById
);

export default router;