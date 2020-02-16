// 通过颜色名称查找定义的颜色码
export const getColor = (color) => {
  switch (color) {
    case 'orange':
      return '#ff8833'
    case 'blue':
      return '#3377ff'
    case 'purple':
      return '#ff33a9'
    case 'red':
      return '#ff3333'
    case 'grey':
      return '#b3b3b3'
    default:
      return ''
  }
}
