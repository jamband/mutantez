export function description (node) {
  if (node.type === 'text') {
    return node.value
  }
  if (node.children && !/^h[1-6]$/.test(node.tag)) {
    return node.children.map(child => description(child))
      .join('')
      .slice(0, 90)
  }
}
