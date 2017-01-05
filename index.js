'use strict';

module.exports = uriPart =>
  uriPart && uriPart.split('&').map((keyValue, index) =>
    !index ?
      keyValue.split('=').map((part, index) =>
        !index && ['?', '#'].includes(part[0]) ?
          part.slice(1) :
          part
      ) :
      keyValue.split('=')
  ).reduce((prev, [key, value]) =>
    Object.assign(prev, {
      [decodeURIComponent(key)]: decodeURIComponent(value)
    }),
    {}
  );
