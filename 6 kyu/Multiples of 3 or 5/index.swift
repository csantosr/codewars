func solution(_ num: Int) -> Int {
  if num < 3 {
    return 0
  }
  var sum: Int = 0
  for i in 3...num - 1 {
    if i % 3 == 0 || i % 5 == 0 {
      sum += i
    }
  }
  return sum
}