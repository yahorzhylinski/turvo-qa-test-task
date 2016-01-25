function DataConfig() {

  var yaml = require('js-yaml');
  var fs   = require('fs');

  var doc = yaml.safeLoad(fs.readFileSync('test_data.yml', 'utf8'));

  return {
    getPropertyByName: function(name) {
      name = name.split(".");
      var result = doc;
      for(var index = 0; index < name.length; index++) {
        result = result[name[index]];
      }

      return result;
    }
  }
}

module.exports = DataConfig;