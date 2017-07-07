////////////////////////////////////////////////////////////////
// ConfigManager API
//
/////////////////////////////////////////////////////////////////
import ClientAPI from 'ClientAPI'

export default class ModelUploaderAPI extends ClientAPI {

  ///////////////////////////////////////////////////////////////
  // Class constructor
  //
  ///////////////////////////////////////////////////////////////
  constructor (apiUrl) {

    super (apiUrl)
  }

  ///////////////////////////////////////////////////////////////
  //
  //
  ///////////////////////////////////////////////////////////////
  upload (file, opts = {}) {

    const url = ''

    const options = Object.assign({}, {
      tag: 'model'
    }, opts)

    return super.upload (url, file, options)
  }
}