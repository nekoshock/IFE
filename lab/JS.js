function sliceArr (length, arr) {
  var result = []
  if (length % 2) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i - Math.floor(length / 2)] && arr[(i + Math.floor(length / 2))]) {
        result.push(i)
      }
    }
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i - (length / 2)] && arr[(i + (length / 2)) - 1]) {
        result.push(i)
      }
    }
  }
  return result
}

function longestPalindrome (s) {
  const sarr = s.split('')
  const rsarr = sarr.concat().reverse()
  const rs = rsarr.join('')
  for (let i = rs.length; i > 0; i -= 1) {
    const sP = sliceArr(i, sarr)
    if (i % 2) {
      const mid = Math.floor(i / 2)
      for (let j = 0; j < sP.length; j += 1) {
        if (s.slice(sP[j] - mid, sP[j]) === rs.slice(0 - sP[j] - 1 - mid, 0 - sP[j] - 1)) {
          return s.slice(sP[j] - mid, sP[j] + mid + 1)
        }
      }
    } else {
      for (let j = 0; j < sP.length; j += 1) {
        if (s.slice(sP[j] - (i / 2), sP[j]) === rs.slice(0 - sP[j] - (i / 2), (0 - sP[j]))) {
          return s.slice(sP[j] - (i / 2), sP[j] + ((i / 2)))
        }
      }
    }
  }
  return ''
}

console.log(longestPalindrome('abcbe'))
