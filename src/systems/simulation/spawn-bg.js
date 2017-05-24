
module.exports = function(ecs, game) {
  ecs.add(function() {
    var bgs = game.entities.find("bg");
    var maxY = 0;
    for (var i = 0; i < bgs.length; i++) {
      var y = game.entities.getComponent(bgs[i], "position").y;
      maxY = Math.max(y, maxY);
    }

    while (maxY < 1136) {
      var id = game.prefabs.instantiate(game.entities, "bg");
      var pos = game.entities.getComponent(id, "position");
      maxY = pos.y = maxY + 317;
    }
  });
};
