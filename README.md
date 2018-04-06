# stop-stream-file-when-over-50

最近用百度網盤下載東西 每次下載到 90% 左右就停住.... 所以好奇想試試看用 node.js 模擬下載到 50% 就停住的狀況

generate 2 MB file
`node writeFile.js`

simulate stop to stream when over 50 % file size
`node index.js`
`curl -o http://localhost:8080`

refer to
<https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93>
<https://stackoverflow.com/a/24415685>
