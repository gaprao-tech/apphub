/**
 * AppsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    total: async (req, res) => {
        let tag = req.query.tag
        let total = await Apps.find({tag: tag})
        return res.ok({total: total})
    },
    deleteTag: async (req, res) => {
        let tag = req.body.tag
        if (!tag) {
            return res.badRequest()
        }
        let destroyedApps = await Apps.destroy({tag: tag}).fetch()
        return res.ok(destroyedApps)
    }
};

