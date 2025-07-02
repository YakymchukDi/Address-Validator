// Simple Ethereum address validator

function isValidEthereumAddress(address) {
  if (typeof address !== 'string') return false;
  if (address.length !== 42) return false;
  if (!address.startsWith('0x')) return false;

  const hexPart = address.slice(2);
  const hexRegex = /^[0-9a-fA-F]{40}$/;
  if (!hexRegex.test(hexPart)) return false;

  // For simplicity, we skip checksum validation here
  return true;
}

// Example usage
console.log(isValidEthereumAddress('0x52908400098527886E0F7030069857D2E4169EE7')); // true
console.log(isValidEthereumAddress('0xInvalidAddress000000000000000000000000')); // false
