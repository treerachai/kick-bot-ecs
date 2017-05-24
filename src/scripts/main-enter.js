"use strict";

module.exports = function(game) { // eslint-disable-line no-unused-vars
  game.scaleCanvasToFitRectangle(640, 1136);
  game.prefabs.instantiate(game.entities, "bg");
};
