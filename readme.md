# Candy Case

## About the site
On this site, you can open cases for the fictional currency "*candy*" and receive prizes. Prizes come in a variety of rarities (*normal, rare, epic, legendary*) on which their value depends. After opening the case, the prize can be both cheaper and more expensive than the cost of the case. All the prizes you win can be added to your inventory or sold. In the inventory, there is an opportunity to sell the available prizes, there is also a panel with easier functionality, you can sell all the items at once, sort them in ascending and descending order of price. You ask me "What should I do if I run out of *candy* ?", I will answer you - The site has a tab with the ability to open a free case every 2 minutes.

## Development
I took the course Become a [Senior Frontend Developer - Vladilen Minin][1] (where he created on pure JS-excel), there I learned a lot of new things. Vladilen showed development on pure JS, showing how React works "under the hood". I really liked the approach of creating UI through [render](src/core/AppComponent.js) of different components, so I used this approach in this project. I also took the "Emitter" pattern from the course, it is needed for interaction between components not directly, but through a special [component Emitter](src/core/Emitter.js).
> There were no difficulties (only at the beginning in mastering the work of the components). Unfortunately, if there was a problem, and I could not solve it for 1-3 hours, I wanted to solve it the next day, and the next day I went to "Web Storm", thought for 10 minutes and did not come to a solution for anyone, threw it the next day. As a result, I solved the problem.

[1]: https://vladilen.ru/excel?utm_source=youtube&utm_medium=social&utm_campaign=jsexcel&utm_content=video
