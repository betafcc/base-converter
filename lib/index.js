const { convertBase } = require('./base.js');


module.exports = {

  from: (_from) => ({
    _from,
    to: (_to) => {
      const c = (digits) => convertBase(digits, _from, _to);

      c._from = _from;
      c._to   = _to;

      return c;
    } 
  }),

  to: (_to) => ({
    _to,
    from: (_from) => {
      const c = (digits) => convertBase(digits, _from, _to);

      c._from = _from;
      c._to   = _to;

      return c;
    }
  }),

};
