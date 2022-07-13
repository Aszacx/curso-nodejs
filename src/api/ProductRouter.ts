import { Router } from 'express';
import { ProductFacade } from '../facade';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/products
 * @swagger
 * /productos/:
 *  post:
 *    description: Get all Products
 *    tags: ["Products"]
 *    responses:
 *      200:
 *        description: All Products
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: Products
 */
router.get('/products', ProductFacade.findAll);

/**
 * GET method route
 * @example http://localhost:PORT/ping
 * @swagger
 * /ping/:
 *  post:
 *    description: Test service
 *    tags: ["Ping"]
 *    responses:
 *      200:
 *        description: Pong
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: pong
 */
router.get('/ping', async (req, res) => {
    res.send('pong');
});

/**
 * @export {express.Router}
 */
export default router;