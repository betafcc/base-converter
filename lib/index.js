const { convertBase } = require('./base.js');


module.exports = {

  from: (_from) => ({
    _from: _from.toString(),
    to: (_to) => {
      const c = (digits) => convertBase(digits.toString(), _from, _to.toString());

      c._from = _from;
      c._to   = _to.toString();

      return c;
    } 
  }),

  to: (_to) => ({
    _to: _to.toString(),
    from: (_from) => {
      const c = (digits) => convertBase(digits, _from.toString(), _to);

      c._from = _from.toString();
      c._to   = _to;

      return c;
    }
  }),

};
