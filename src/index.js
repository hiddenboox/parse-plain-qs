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
  ).reduce((prev, keyValue) => {
      prev[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1])
      return prev
    },
    {}
  );
