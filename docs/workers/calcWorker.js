onmessage = (event) => {
  console.log(event.data)
  postMessage('copy that')
  return
}
