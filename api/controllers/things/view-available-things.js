module.exports = {


  friendlyName: 'View available things',


  description: 'Display "Available things" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things/available-things'
    }

  },


  fn: async function () {

    var me = await User.findOne({
      id: this.req.me.id
    })
    .populate('friends');

    var friendIds = _.pluck(me.friends, 'id');

    // TODO:
    var things = await Thing.find({
      or: [
        { user: this.req.me.id },
        { user: { in: friendIds } },
      ]
    })
    .populate('user');

    return {things};
  }
};
