const middleware = require('@blocklet/sdk/lib/middlewares');
const component = require('@blocklet/sdk/lib/component');
const router = require('express').Router();

router.use('/user', middleware.user(), (req, res) => res.json(req.user || {}));
router.use('/component-call', async (req, res) => {
  try {
    const { data } = await component.call({
      name: 'z2qZzqqjLVm6AVPN4kJBJUYV2WLdEiTFNcPob',
      method: 'post',
      path: '/api/component-call',
      data: {
        msg: 'ping',
      },
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
