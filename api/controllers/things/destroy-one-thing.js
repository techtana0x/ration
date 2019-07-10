module.exports = {


  friendlyName: 'Destroy one thing',


  description: 'Delete one "thing" fron the database.',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {
    forbidden: {
      description: 'The user does not own this thing',
      responseType: 'forbidden'
    },
    notFound: {
      description: 'This thing does not exist',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs) {
    var thing = await Thing.findOne({ id: inputs.id });

    if (!thing) {
      throw 'notFound';
    }

    if (thing.user !== this.req.me.id) {
      throw 'forbidden';
    }

    await Thing.destroy({ id: inputs.id });
    return;
  }
};
