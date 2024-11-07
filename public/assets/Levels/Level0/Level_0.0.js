import { Scene } from 'phaser';

export class MainMenu extends Scene
(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("Level_0",
{ "compressionlevel":-1,
 "height":8,
 "infinite":false,
 "layers":[
        {
         "data":[21, 22, 22, 22, 22, 22, 22, 23,
            40, 41, 41, 41, 41, 41, 41, 42,
            40, 41, 41, 41, 41, 41, 41, 42,
            40, 41, 41, 27, 28, 41, 41, 42,
            40, 41, 41, 46, 47, 41, 41, 42,
            40, 41, 41, 41, 41, 41, 41, 42,
            40, 41, 41, 41, 41, 41, 41, 42,
            59, 60, 60, 60, 60, 60, 60, 61],
         "height":8,
         "id":1,
         "name":"Platforms",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":8,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":4,
         "name":"Object Layer 1",
         "objects":[
                {
                 "gid":290,
                 "height":56,
                 "id":7,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":46,
                 "x":177,
                 "y":233.426356589147
                }, 
                {
                 "gid":276,
                 "height":32,
                 "id":8,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":259.968992248062,
                 "y":191.968992248062
                }, 
                {
                 "gid":276,
                 "height":32,
                 "id":9,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":455.317829457364,
                 "y":304.372093023256
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":5,
 "nextobjectid":10,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.11.0",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"k&p_tileset.tsx"
        }, 
        {
         "firstgid":248,
         "source":"k&p_decor.tsx"
        }, 
        {
         "firstgid":290,
         "source":"k&p_door.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.10",
 "width":8
}) {}