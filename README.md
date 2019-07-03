# three-trees

let me introduce my fractal tree project :)
as start point we do have a basic fractal tree idea introduced and explained through Daniel Shiffman in coding challenge 14 at youtube. In short words explained it is as following:
you do an recursive function 'branch' with a parameter of lenght, wich draws a vertical stic in bottom of the screen, then you call the fn branch for two next sticks (branches) with smaller size (length*0.7) and angles to the left and right of the top of the stick. The recursive function should stop when the given parameter of branch size is to small to draw to avoid endless loop.
that's it.
I wanted to develop this idea for my own coding challenge having a tree which:
- grows from small to big whole size and thickness
- moves like in the wind
- has a random number of branches on each level
- the branches are slowly curved as by the trees and
- consist therefore from circles and only on more to top from lines
- the branches are growing level after level
- unfolding their angles similar to the nature
- there are a game of colors symbolising the traffic exchange of enegy between sun and the root
- on the end, when the last branch is growed to optimal size, the last is growing a leaf on it, which coming also somehow trembling
- It was fun to discover that recursive classen can also exist!
- so I collected those elements in a class branch wich contains array of next branches wich are created through colling recursive the same class
- in this way we have an multi dimentional arrayed object as tree, it looks to have the same principals as directory tree (or forum tree or comment tree etc.), wich was also nice to discover.

________________-



fractalic class obbjected trees growing smooth with branch disfolding curvature fokus on branches nice colors

///  i wanted to make a growing plant/ tree from zero. each new branch should grow slowly, old

// branches will be drawen in full size. 

//the angle should slowly unfold from bottom to top

// each new branch should start after some time

each new branch has a brighter color

//branches are folding out level after level...


the class tree contains values for each branch and an array container [1-4] for following new branches

the idea of this code was inspired from watching videos about coding in p5.js with daniel shiffman
like https://www.youtube.com/watch?v=0jjeOYMjmDU
