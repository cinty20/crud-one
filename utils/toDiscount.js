const toThousand = require("/toThousand");

module.exports = (price,discount) => toThousand(discount * price /100)