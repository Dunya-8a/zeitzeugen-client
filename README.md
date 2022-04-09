# Zeitzeugen

This is the initial iteration of the Zeitzeugen project. Zeitzeugen wants to provide the world with a central location store collective memory. For future generations. So that those who lived will not be forgotten. To remember our history.

Zeitzeugen works by uploading videos to a peer-to-peer decentralized network, the Interplanetary File System (IPFS). It ensures the immutability and resistance to censorship of the file. When adding data to the IPFS, it provides us with a unique Content Identifier (CID) that is used to locate the file in the network (by content-addressing). See more about that here: https://ipfs.io/. 

This client contains a working version of the app by making POST requests to a public API. Alternatively, you can use your own IPFS node. See ipfs.js for changing the IPFS gateway.