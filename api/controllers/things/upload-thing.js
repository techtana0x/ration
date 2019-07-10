module.exports = {


  friendlyName: 'Upload thing',


  description: '',

  filed: ['photo'],


  inputs: {
    photo: {
      type: 'ref',
      description: 'Uploaded file stream',
      required: true
    },
    label: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    return;

  }


};
