function between(x, min, max) {
  return x >= min && x <= max
}

function between2(x, min, max) {
  return x >= min && x < max
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0
}

function countMax(data, max) {
  return new Map(
    [...new Set(data)].map((x) => [x, data.filter((y) => y === x).length])
  ).get(max)
}

function find_largest(round, n) {
  let list = [round * round]
  if (round > 2) {
    round = Math.ceil(round / 2)
  }
  let exponent = 3
  while (round > 1) {
    let pow = Math.pow(round, exponent)
    if (between2(pow, Math.max(...list), n)) {
      list.push(pow)
    } 
    else {
      while (pow < Math.max(...list)) {
        exponent += 1
        pow = Math.pow(round, exponent)
        if (between2(pow, Math.max(...list), n)) {
          list.push(pow)
          break
        }
      }
    }
    // console.log(round);
    round -= 1
  }
  const count = countMax(list, Math.max(...list))
  return [Math.max(...list), count]
}

function largest_power(n) {
  if (between(n, 2, 4)) {
    return [1, -1]
  } else if (between(n, 5, 1000000)) {
    const sqrt = Math.sqrt(n)
    let round = Math.floor(sqrt)
    if (isFloat(sqrt)) {
      return find_largest(round, n)
    } else {
      return find_largest(round - 1, n)
    }
  }
  return [0, -1]
}

// console.time('test')
// console.log(largest_power(2187))
// console.timeEnd('test')

console.log(largest_power(90))
console.log(largest_power(6))
console.log(largest_power(65))
console.log(largest_power(3))
console.log(largest_power(1))
console.log(largest_power(81))
console.log(largest_power(29))
console.log(largest_power(4))
// console.log(largest_power(531445))
// console.log(largest_power(4914))
// console.log(largest_power(456534))
// console.log(largest_power(2488325))
// console.log(largest_power(390629))
