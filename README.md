### Chess Frontend

## General

This is a frontend for a project I've wanted to do for a while: a browser-based single player chess. The purpose of this project is fourfold:

1. Maintain my skill in JavaScript/React
2. Improve upon my knowledge of Docker
 - on my internship I had lots of difficulties getting multiple containers to work together, especially on virtual machines on Azure. on this project I intend to have as many separate containers as I can.
3. Learn about AI
4. Learn about Golang
 - Backend on Remainders was done in Go. This got me interested on the language, and this seems like a good opportunity to learn more about it.
 - in case Go doesn't work well on AI, I can always switch to Python, another language I've been meaning to learn.

## Structure



## Dev diary

### 7.4.2022

- initialised the project
- initial board layout, couple pieces placed. image origin for pieces: https://www.kindpng.com/imgv/hxbhmb_chess-pieces-png-chess-pieces-sprite-sheet-transparent/

### 8.4.2022

- cut rest of the images

### 3.5.2022

- basic objects for pieces with images, point values and boolean fo whether they are alive or not. separate arrays for storing white and black pieces.
- pieces are placed on board from arrays
- board and pieces on their own components
