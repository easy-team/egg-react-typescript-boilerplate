<!DOCTYPE html>
<html lang='en'>
<head>
  <title>{{title}}</title>
  <meta name='keywords'>
  <meta name='description'>
  <meta http-equiv='content-type' content='text/html;charset=utf-8'>
  <meta name='viewport' content='initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'>
  <!-- html-webpack-plugin 自动注入 css -->
</head>
<body>
  <div id='app'></div>
  <script type="text/javascript">
    window.__INITIAL_STATE__ = {{data | safe}};
  </script>
  <!-- html-webpack-plugin 自动注入 js -->
</body>
</html>