let MAX_SAFE_INTEGER = 9007199254740991;

exports.isFinite = (value) => !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity)
exports.isSafeNumber = (value) => typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER