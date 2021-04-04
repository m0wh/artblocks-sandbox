import run from './script'

function random_hash() {
  let chars = '0123456789abcdef';
  let result = '0x';
  for (let i = 64; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

const tokenData = { 'hash': random_hash() }

run(tokenData)
