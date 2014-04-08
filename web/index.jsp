<%--
  Created by IntelliJ IDEA.
  User: Easley94
  Date: 4/4/2014
  Time: 7:57 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title></title>
  </head>
  <body>
  <canvas id="demoCanvas" width="500" height="300">
      alternate content
  </canvas>
  <script type="text/javascript" src="http://code.createjs.com/createjs-2013.12.12.min.js"></script>
  <script type="text/javascript" src="js/game.js"></script>
  <script>
      window.addEventListener('load', Game.init);
  </script>
  </body>
</html>
