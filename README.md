NaCL Chrome plugin checker

Add this to HTML
```
<style>
    * {
      overflow: hidden;
    }
    #Selection {
      display: block;
      position: absolute;
      top: 1;
      left: 5;
      visibility: visible;
    }
  </style>
  <div id="Selection">
    <h3 id="checker">Checking browser compatibility, please wait...</h3>
  </div>
  <script src="./assets/js/check_browser.js"></script>
  <script src="./assets/js/check.js"></script>
  ```
