const middleware = require('@blocklet/sdk/lib/middlewares');
const router = require('express').Router();

router.use('/user', middleware.user(), (req, res) => res.json(req.user || {}));
router.use('/component-call', middleware.component.verifySig, (req, res) => {
  const data = req.body;
  res.json({ req: data.msg, res: 'pong' });
});

module.exports = router;
