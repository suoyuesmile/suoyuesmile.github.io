export const calcTime = (distance) => {
  const days = Math.floor(distance / (24 * 3600 * 1000))
  const leave1 = distance % (24 * 3600 * 1000)
  const hours = Math.floor(leave1 / (3600 * 1000))
  const leave2 = leave1 % (3600 * 1000)
  const minutes = Math.floor(leave2 / (60 * 1000))
  const leave3 = leave2 % (60 * 1000)
  const seconds = Math.round(leave3 / 1000)
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}
